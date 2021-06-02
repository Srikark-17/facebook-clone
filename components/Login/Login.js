import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
  return (
    <div className="grid place-items-center dark:bg-gray-900">
      <Image
        src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center w-1/6 cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
