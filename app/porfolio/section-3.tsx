import { Avatar } from "@nextui-org/react";

export function Section3() {
  return (
    <>
      <div className="mt-20 ">
        <div className="">
          <p className="text-center text-2xl font-medium">
            Serving world-class developers, world-wide
          </p>
          <div className="grid lg:grid-cols-2 gap-5 mt-5">
            <div className="border dark:border-gray-500 dark:bg-black rounded-3xl p-6 bg-white   ">
              <div className="flex gap-2 ">
                <div className="">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                    size="md"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="">
                    <p className="text-md">Thomas Shelby</p>
                    <p className="text-small text-blue-500">@tshelby</p>
                  </div>
                  <p className="text-md">
                    Bootstrap products, subscriptions, checkouts & webhooks in
                    your Next.js or Nuxt.js project.
                  </p>
                </div>
              </div>
            </div>

            <div className="border dark:border-gray-500 dark:bg-black rounded-3xl p-6 bg-white   ">
              <div className="flex gap-2 ">
                <div className="">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                    size="md"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="">
                    <p className="text-md">Thomas Shelby</p>
                    <p className="text-small text-blue-500">@tshelby</p>
                  </div>
                  <p className="text-md">
                    An isolated sandbox environment, so you can test your
                    integration without risk.
                  </p>
                </div>
              </div>
            </div>
            <div className="border dark:border-gray-500 dark:bg-black rounded-3xl p-6 bg-white   ">
              <div className="flex gap-2 ">
                <div className="">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                    size="md"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="">
                    <p className="text-md">Thomas Shelby</p>
                    <p className="text-small text-blue-500">@tshelby</p>
                  </div>
                  <p className="text-md">
                    Receive reliable webhooks for events, including payments,
                    subscriptions, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
