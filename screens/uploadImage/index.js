import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Platform,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
// import * as MediaLibrary from "expo-media-library";

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const [type, setType] = useState();

  const handleEditProfile = () => {
    const formData = new FormData();
    formData.append("avatar", {
      uri: image,
      name: `profile-${Date.now()}.jpg`,
      type: "image/jpg",
    });
    axios({
      method: "PATCH",
      url: `https://cheerful-overalls-fawn.cyclic.app/api/v1/users/62c0585b-327a-431e-aac8-692b9a2da3eb`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        console.log(formData);
        console.log(result.data.message);
        ToastAndroid.show(result.data.message, ToastAndroid.SHORT);
      })
      .catch((err) => {
        console.log(formData);
        ToastAndroid.show("Failed to edit profile! 😐", ToastAndroid.SHORT);
      });
  };

  const editAvatar = () => {
    Alert.alert("Edit Avatar", `You will update your avatar`, [
      { text: "Take a picture", onPress: () => pickImageFromCamera() },
      { text: "Take from gallery", onPress: () => pickImageFromGallery() },
    ]);
  };

  const pickImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result.assets[0].uri);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImageFromGallery = async () => {
    let avatar = await ImagePicker.launchImageLibraryAsync({
      //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      selectionLimit: 1,
    });

    if (!avatar.canceled) {
      setImage(avatar.assets[0].uri);
      setType(avatar.assets[0].type);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={editAvatar}
        style={{
          backgroundColor: "skyblue",
          padding: 10,
          borderRadius: 10,
          width: 150,
          alignItems: "center",
        }}
      >
        <Text>Edit</Text>
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 2,
          borderColor: "#000",
          width: 300,
          height: 300,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
      <TouchableOpacity
        onPress={handleEditProfile}
        style={{
          backgroundColor: "skyblue",
          padding: 10,
          borderRadius: 10,
          width: 150,
          alignItems: "center",
        }}
      >
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}
