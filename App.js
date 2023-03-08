import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/welcome";
import HomePage from "./screens/home";
import WelcomeAuth from "./screens/auth/welcome-auth";
import Signup from "./screens/auth/signup";
import Login from "./screens/auth/login";
import ForgotPassword from "./screens/auth/forgot";
import ProductDetail from "./screens/productDetail";
import Cart from "./screens/cart";
import DeliveryMethod from "./screens/deliveryMethod";
import Payment from "./screens/payment";
import Profile from "./screens/profile";
import EditProfile from "./screens/editProfile";
import History from "./screens/history";
import SeeMore from "./screens/seeMore";
import Coupons from "./screens/coupons";
import Chat from "./screens/chat";
import Chatroom from "./screens/chatroom";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerCustom from "./src/components/DrawerCustom";
import Icon from "@expo/vector-icons/Ionicons";
import SplashScreen from "./screens/splash/SplashScreen";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
export default function App() {
  const HomePageDrawer = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#6A4029",
          drawerActiveBackgroundColor: "#6A4029",
          drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: "#000" },
          drawerType: "slide",
        }}
        drawerContent={DrawerCustom}
      >
        <Drawer.Screen
          name="Home Page"
          component={HomePage}
          options={{
            drawerIcon: ({ color, focused }) => {
              if (focused) {
                return <Icon name="home" size={26} color={color} />;
              } else {
                return <Icon name="home-outline" size={26} color="#6A4029" />;
              }
            },
          }}
        />
        <Drawer.Screen
          name="Edit Profile Page"
          component={EditProfile}
          options={{
            drawerIcon: ({ color, focused }) => {
              if (focused) {
                return <Icon name="person" size={26} color={color} />;
              } else {
                return <Icon name="person-outline" size={26} color="#6A4029" />;
              }
            },
          }}
        />
        <Drawer.Screen
          name="Cart Page"
          component={Cart}
          options={{
            drawerIcon: ({ color, focused }) => {
              if (focused) {
                return <Icon name="cart" size={26} color={color} />;
              } else {
                return <Icon name="cart-outline" size={26} color="#6A4029" />;
              }
            },
          }}
        />
      </Drawer.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash Screen">
        <Stack.Screen
          name="Home Drawer"
          component={HomePageDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login Page"
          component={Login}
          options={{ title: "Login Page", headerShown: false }}
        />
        <Stack.Screen
          name="Signup Page"
          component={Signup}
          options={{ title: "Signup Page", headerShown: false }}
        />
        <Stack.Screen
          name="Splash Screen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Product Detail Page"
          component={ProductDetail}
          options={{ title: "Product Detail Page", headerShown: false }}
        />
        <Stack.Screen
          name="Cart Page"
          component={Cart}
          options={{ title: "Cart Page", headerShown: false }}
        />
        <Stack.Screen
          name="Welcome Page"
          component={Welcome}
          options={{ title: "Welcome Page", headerShown: false }}
        />
        <Stack.Screen
          name="Welcome Auth"
          component={WelcomeAuth}
          options={{ title: "Welcome Auth Page", headerShown: false }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPassword}
          options={{ title: "Forgot Password", headerShown: false }}
        />
        <Stack.Screen
          name="Delivery Method Page"
          component={DeliveryMethod}
          options={{ title: "Delivery Method Page", headerShown: false }}
        />
        <Stack.Screen
          name="Payment Page"
          component={Payment}
          options={{ title: "Payment Page", headerShown: false }}
        />
        <Stack.Screen
          name="Profile Page"
          component={Profile}
          options={{ title: "Profile Page", headerShown: false }}
        />
        <Stack.Screen
          name="Edit Profile Page"
          component={EditProfile}
          options={{ title: "Edit Profile Page", headerShown: false }}
        />
        <Stack.Screen
          name="History Page"
          component={History}
          options={{ title: "History Page", headerShown: false }}
        />
        <Stack.Screen
          name="See More Page"
          component={SeeMore}
          options={{ title: "See More Page", headerShown: false }}
        />
        <Stack.Screen
          name="Coupons Page"
          component={Coupons}
          options={{ title: "Coupons Page", headerShown: false }}
        />
        <Stack.Screen
          name="Chat Page"
          component={Chat}
          options={{ title: "Chat Page", headerShown: false }}
        />
        <Stack.Screen
          name="Chatroom Page"
          component={Chatroom}
          options={{ title: "Chatroom Page", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
