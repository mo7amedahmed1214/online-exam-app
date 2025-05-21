import UserProvider from "@/components/providers/user/user.provider";
import NextAuthProvider from "./components/next-auth.provider";
import ReactQueryProvider from "./components/react-query.provider";

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
