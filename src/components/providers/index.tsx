import UserProvider from "@/context/user.context";
import NextAuthProvider from "./components/next-auth.provider";
import ReactQueryProvider from "./components/react-qures.provider";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <NextAuthProvider>
        <UserProvider>{children}</UserProvider>
      </NextAuthProvider>
    </ReactQueryProvider>
  );
}
