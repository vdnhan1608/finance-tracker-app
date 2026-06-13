import Background from "@/components/back-ground";
import Header from "@/components/header";
import TransactionHistory from "@/components/transaction-history";
import ModalScreen from "@/modals/modal";
export default function HomeScreen() {
  return (
    <>
      <Background />
      <Header name="Home" isHome={true} />
      <ModalScreen />
      <TransactionHistory></TransactionHistory>
    </>
  );
}
