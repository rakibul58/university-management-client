import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      console.log({ error });
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">Id: </label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
