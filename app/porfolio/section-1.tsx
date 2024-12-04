import { Chip } from "@nextui-org/react";

export function Section1() {
  return (
    <>
      <div className="border dark:border-gray-500 dark:bg-black bg-white  rounded-3xl  mt-10 px-10 py-24 ">
        <div className="text-center flex flex-col gap-5 ">
          <p className="text-lg">Built for Developers</p>
          <p className="text-2xl font-semibold align-center">
            The fastest way to add SaaS & digital products to your stack
          </p>
          <div className="">
            {" "}
            <Chip>Integriate with your stack</Chip>
          </div>
        </div>

        <div className="border dark:border-gray-500 dark:bg-gray-950 bg-gray-100 rounded-xl mt-10 px-5 py-8">
            <p className="font-medium text-xl">npx polar-init</p>
            <p className="text-gray-500">Bootstrap products, subscriptions, checkouts & webhooks in your Next.js or Nuxt.js project.

</p>
        </div>

        <div className="border dark:border-gray-500 dark:bg-gray-950 bg-gray-100 rounded-xl mt-10 px-5 py-8">
            <p className="font-medium text-xl">Sandbox</p>
            <p className="text-gray-500">An isolated sandbox environment, so you can test your integration without risk.



</p>
        </div>

        <div className="border dark:border-gray-500 dark:bg-gray-950 bg-gray-100 rounded-xl mt-10 px-5 py-8">
            <p className="font-medium text-xl">Webhooks</p>
            <p className="text-gray-500">Receive reliable webhooks for events, including payments, subscriptions, and more.




</p>
        </div>
      </div>
    </>
  );
}
