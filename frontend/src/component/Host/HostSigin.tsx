import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import axios from "axios";
import { Link } from "react-router"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner";

const HostSigin =()=>{
const [displaymessage,setDisplaymessage] = useState<string>("");
const [isLoading, setIsLoading] = useState(false);
const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role:"host"
});
const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target;
    setFormData((prev)=>({
        ...prev,
        [name]:value,
    }))
}
const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      
       
         const oauthsign = () => {
              window.location.href = "http://localhost:3004/auth/google";
         }
    } catch (error) {
        setIsLoading(false)
        
        console.error('Login error:', error);
        setDisplaymessage("internal server error")
    } finally {
        setIsLoading(false);
    }
}

const Submitform =async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        setIsLoading(true)
        const response = await axios.post("http://localhost:3004/host/signup", formData);
        console.log(response);
    } catch (error) {
        console.error(error);
    }finally {
      setIsLoading(false)
    }
}
return (
    <>
       <div className="flex justify-center items-center h-screen">
    {isLoading ? <Button disabled size="sm">
        <Spinner />
        Loading...
      </Button>:
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle>Signup to your account</CardTitle>
        <CardDescription >
          Enter your email below to Signup to your account
        </CardDescription>
        <CardAction>
          <Button variant="link"><Link to="/host/login">Login</Link></Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={Submitform}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="Username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <Input type="hidden" value={formData.role}></Input>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/host/forgot-password"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-red-500">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>}
    </div>
    </>
)

}
export default HostSigin;