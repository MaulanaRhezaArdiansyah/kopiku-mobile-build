import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import FormData from "form-data";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
import * as ImagePicker from "expo-image-picker";
import styles from "./style";

export default function EditProfile({ navigation, route }) {
  const { ID } = route.params;
  const [refetch, setRefetch] = useState(false);
  const [dataUser, setDataUser] = useState({
    id: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    username: "",
    image: "",
    gender: "",
    phone: "",
    birthday: "",
    delivery_address: "",
    role: "",
  });

  const URL = `https://cheerful-overalls-fawn.cyclic.app/`;

  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://cheerful-overalls-fawn.cyclic.app/api/v1/users/${ID}`
      );
      const data = await response.data.data;
      setDataUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  // console.log("1");

  // const fetchUser = async () => {
  //   const url = `https://cheerful-overalls-fawn.cyclic.app/api/v1/users/${ID}`;
  //   const response = await axios.get(url);
  //   console.log(response);
  // };
  // fetchUser();
  // console.log("2");
  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const response = await axios.get(`${URL}/api/v1/users/${ID}`);
  //       const data = await response?.data?.data;
  //       setDataUser(data);
  //       setRefetch(!refetch);
  //       // setRefetch(true);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getUser();
  // }, [refetch]);

  const [imagePreview, setImagePreview] = useState(null);
  const [dataInput, setDataInput] = useState({
    username: "",
    email: "",
    phone: "",
    birthday: "",
    delivery_address: "",
  });

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
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImagePreview(result.assets[0].uri);
    }
  };

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      selectionLimit: 1,
    });

    if (!result.canceled) {
      setImagePreview(result.assets[0].uri);
    }
  };

  const handleEditProfile = () => {
    const formData = new FormData();
    formData.append("username", dataInput.username);
    formData.append("email", dataInput.email);
    formData.append("phone", dataInput.phone);
    formData.append("birthday", dataInput.birthday);
    formData.append("delivery_address", dataInput.delivery_address);
    formData.append("avatar", {
      uri: imagePreview,
      name: `profile-${Date.now()}.jpg`,
      type: "image/jpg",
    });
    axios({
      method: "PATCH",
      url: `https://cheerful-overalls-fawn.cyclic.app/api/v1/users/${ID}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        console.log(result.data.message);
        ToastAndroid.show(result.data.message, ToastAndroid.SHORT);
        // navigation.navigate("Profile Page");
      })
      .catch((err) => {
        console.log(err);
        ToastAndroid.show("Failed to edit profile! 😐", ToastAndroid.SHORT);
      });
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={[commonStyle.px40, styles.container]}>
        <View style={styles.navbar}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={require("../../src/assets/images/go-back-2.png")} />
          </Pressable>
          <Text style={styles.headerText}>Edit Profile</Text>
          <Text>{""}</Text>
        </View>

        <TouchableOpacity
          style={styles.imageWrapper}
          activeOpacity={0.7}
          onPress={editAvatar}
        >
          <Image
            style={styles.image}
            source={
              imagePreview
                ? { uri: imagePreview }
                : dataUser.image
                ? {
                    uri: `https://cheerful-overalls-fawn.cyclic.app/uploads/images/${dataUser.image}`,
                  }
                : require("../../src/assets/images/default-avatar.jpg")
            }
          />
          <Pressable style={styles.editPencilWrapper}>
            <Image
              style={styles.editPencil}
              source={require("../../src/assets/images/edit-pencil.png")}
            />
          </Pressable>
        </TouchableOpacity>

        <View>
          <Text style={styles.labelForm}>Name :</Text>
          <TextInput
            onChangeText={(text) => {
              setDataInput({
                ...dataInput,
                username: text,
              });
            }}
            placeholder={dataUser?.username}
            style={styles.inputForm}
          />
        </View>
        <View>
          <Text style={styles.labelForm}>Email Address :</Text>
          <TextInput
            onChangeText={(text) =>
              setDataInput({
                ...dataInput,
                email: text,
              })
            }
            placeholder={dataUser?.email ? dataUser?.email : "-"}
            style={styles.inputForm}
          />
        </View>
        <View>
          <Text style={styles.labelForm}>Phone Number :</Text>
          <TextInput
            onChangeText={(text) =>
              setDataInput({
                ...dataInput,
                phone: text,
              })
            }
            placeholder={dataUser?.phone ? dataUser?.phone : "-"}
            style={styles.inputForm}
          />
        </View>
        <View>
          <Text style={styles.labelForm}>Date of Birth :</Text>
          <View style={styles.inputBirthDate}>
            <TextInput
              onChangeText={(text) =>
                setDataInput({
                  ...dataInput,
                  birthday: text,
                })
              }
              placeholder={
                dataUser?.birthday !== "null" ? dataUser?.birthday : "-"
              }
              // style={}
            />
            <Pressable>
              <Image source={require("../../src/assets/images/calendar.png")} />
            </Pressable>
          </View>
        </View>
        <View style={{ marginBottom: 40 }}>
          <Text style={styles.labelForm}>Delivery Address :</Text>
          <TextInput
            onChangeText={(text) =>
              setDataInput({
                ...dataInput,
                delivery_address: text,
              })
            }
            placeholder={
              dataUser?.delivery_address !== "null"
                ? dataUser?.delivery_address
                : "-"
            }
            style={styles.inputForm}
          />
        </View>

        <TouchableOpacity
          style={[commonStyle.brownButton]}
          onPress={handleEditProfile}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
            Save and Update
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
