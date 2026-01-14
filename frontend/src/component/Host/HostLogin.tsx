import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { useState } from "react";
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

export function HostLogin() {
  const [displaymessage,setDisplaymessage] = useState("");
  const [showmesage,setShowmessage]= useState<boolean>(false)
  const [formData, setFormData] = useState({
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
  const handleSubmitLogin = async (e:React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log('Login submitted:', formData);
      const response = await axios.post("http://localhost:3000/host/login", formData)
      .then(()=>{
      setShowmessage(true)
      setDisplaymessage("You are Login Successfully")
        
      console.log("user is login successfully")
      })
   
      console.log(response);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  }
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
         const oauthsign = () => {
              window.location.href = "http://localhost:3004/auth/google";
         }
    } catch (error) {
        console.error('Login error:', error);
    } finally {
        setIsLoading(false);
    }
}
  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? <Button disabled size="sm">
        <Spinner />
        Loading...
      </Button>:
    <Card className="w-full max-w-sm ">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription >
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link"><Link to="/host/sigin">Sign Up</Link></Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmitLogin}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                 to="/host/forget-password"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Input type="hidden" value={formData.role}></Input>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-red-500">
          Login
        </Button>
        <Button variant="outline" className="w-full" onClick={handleSubmit}>
          Login with Google
        </Button>
      </CardFooter>
    </Card>}
    </div>
  )
}

export default HostLogin;