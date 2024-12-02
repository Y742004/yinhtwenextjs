import { Input } from "@nextui-org/react";

export default function MainData() {
    return (
        <>
        <div className=" p-3 text-center mt-10">
           <div className="grid gap-3">
           <Input
          
          type="email"
          variant="bordered"
          color={"primary"}
          label="Email"
          labelPlacement="outside"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          className="max-w-[220px]"
        />

           <Input
           className="w-80"
            color="primary"
            radius="none"
            variant="bordered"
            label="Number:"
            labelPlacement="outside"
            placeholder="Enter the number"
            />

<Input
           className="w-80"
            color="primary"
            radius="none"
            variant="bordered"
            label="Number:"
            labelPlacement="outside"
            placeholder="Enter the number"
            />


<Input
           className="w-80 border-2 border-green-400 bg-white"
            color="success"
            radius="none"
            variant="faded"
            label="Number:"
            labelPlacement="outside"
            placeholder="Enter the number"
            />


<Input
           className="w-80"
            color="primary"
            radius="none"
            variant="bordered"
            label="Number:"
            labelPlacement="outside"
            placeholder="Enter the number"
            />



<Input
           className="w-80"
            color="primary"
            radius="none"
            variant="bordered"
            label="Number:"
            labelPlacement="outside"
            placeholder="Enter the number"
            />


           </div>
        </div>
        
        </>
    )
}