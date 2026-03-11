import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as LucideIcons from "lucide-react-native";
import { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import TabBar from "../../components/ui/TabBar";
import { Colors } from "../../constants/theme";

export default function TabsLayout() {
  const [resetModal, setResetModal] = useState(false);
  const [securityModal, setSecurityModal] = useState(false);

  return (
    <>
      <StatusBar style="dark" backgroundColor="#252525" />
      <Tabs
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.light.background,
            borderBottomWidth: 2,
            borderBottomColor: Colors.light.tint,
          },
          headerTitleAlign: "left",
          headerTintColor: Colors.light.tint,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: 0.5,
          },
        }}
      >
        <Tabs.Screen name="home" options={{ headerShown: false }} />
        <Tabs.Screen
          name="transactions"
          options={{
            title: "Transações",
            headerRight: () => (
              <View style={{ flexDirection: "row", marginRight: 12 }}>
                <Pressable
                  onPress={() => setResetModal(true)}
                  style={{
                    padding: 8,
                    borderRadius: 8,
                    backgroundColor: Colors.light.background,
                    borderWidth: 2,
                    borderColor: Colors.light.tint,
                  }}
                >
                  <MaterialIcons
                    name="refresh"
                    size={24}
                    color={Colors.light.icon}
                  />
                </Pressable>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="sumary"
          options={{
            title: "Resumo Financeiro",
          }}
        />

        <Tabs.Screen name="market" options={{ title: "Adicionar Transação" }} />
      </Tabs>

      <Modal
        visible={securityModal}
        animationType="slide"
        presentationStyle="overFullScreen"
        onRequestClose={() => setSecurityModal(false)}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingTop: 60,
              paddingBottom: 20,
              backgroundColor: Colors.light.background,
              borderBottomWidth: 1,
              borderBottomColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <Pressable
              onPress={() => setSecurityModal(false)}
              style={{ padding: 8 }}
            >
              <LucideIcons.X size={24} color={Colors.light.text} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}
