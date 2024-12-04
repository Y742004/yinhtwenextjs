import { Button, Chip } from "@nextui-org/react";

export function Section2() {
  return (
    <>
      <div className="border dark:border-gray-500 dark:bg-black bg-white rounded-3xl mt-10 px-10 py-24  grid lg:grid-cols-3 gap-5">
        <div className=" flex flex-col  gap-5 ">
          <p className="text-7xl font-medium">
            Automated benefits like never before
          </p>
          <p className=" ">
            The fastest way to add SaaS & digital products to your stack
          </p>
          <div className="">
            <Button className="bg-teal-500 text-white">Get Started</Button>
            <Button className="text-teal-500" variant="light">
              Sell all benefits
            </Button>
          </div>
        </div>

        <div className="">
          {" "}
          <div className="border dark:border-gray-500 dark:bg-gray-950 bg-gray-100 rounded-xl mt-10 px-5 py-8">
            <p className="font-medium text-xl">npx polar-init</p>
            <p className="text-gray-500">
              Bootstrap products, subscriptions, checkouts & webhooks in your
              Next.js or Nuxt.js project.
            </p>
          </div>
          <div className="border dark:border-gray-500 dark:bg-gray-950 bg-gray-100 rounded-xl mt-10 px-5 py-8">
            <p className="font-medium text-xl">Sandbox</p>
            <p className="text-gray-500">
              An isolated sandbox environment, so you can test your integration
              without risk.
            </p>
          </div>
          <div className="border dark:border-gray-500 dark:bg-gray-950 bg-gray-100 rounded-xl mt-10 px-5 py-8">
            <p className="font-medium text-xl">Webhooks</p>
            <p className="text-gray-500">
              Receive reliable webhooks for events, including payments,
              subscriptions, and more.
            </p>
          </div>
        </div>
        <div className="border dark:border-gray-500 dark:bg-gray-950 bg-gray-100 rounded-xl mt-10 px-5 py-8">
          <p className="font-medium text-xl">Webhooks</p>
          <p className="text-gray-500">
            Receive reliable webhooks for events, including payments,
            subscriptions, and more.
          </p>
          <div className="border dark:border-gray-500 dark:bg-black text-lg bg-gray-50 rounded-xl mt-10 px-5 py-8">
            <p>Included</p>
            <p>Private GitHub repository</p>
            <p>Private GitHub repository</p>
            <p>Private GitHub repository</p>
            <p>Private GitHub repository</p>

          </div>
        </div>
      </div>
    </>
  );
}
