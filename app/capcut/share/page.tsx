"use client";

import {
  Button,
  Card,
  CardBody,
  Divider,
  Image,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { SideBarCapcut } from "../sidebar";
import { TemplatesNavi } from "../templates/page";
import { VideoIcon } from "@/app/Iconify/videoIcon";
import { ImageIcon } from "@/app/Iconify/imageIcon";

export default function Page() {
  return (
    <>
      <div className="flex">
        <div className="">
          <SideBarCapcut />
        </div>
        <div className=" w-full">
          <TemplatesNavi />
          <ShareCapcut />
        </div>
      </div>
    </>
  );
}

export function ShareCapcut() {
  return (
    <>
      <div className="p-5 space-y-5">
        <div className="">
          <p className=" text-2xl font-semibold">Share and schedule</p>
        </div>

        <div className="">
          <Tabs variant="underlined" aria-label="Options ">
            <Tab key="shareHistory" title="Share history">
              <div className="">
                <Tabs aria-label="Options">
                  <Tab key="sharedwithyou" title="Shared with you">
                    <div className="space-y-5   h-screen flex flex-col  justify-center ">
                      <div className="space-x-5 flex justify-center">
                        <Image
                          className="w-24"
                          src="data:image/png;base64,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"
                        />
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-500 text-md">
                          Videos shared with you will appear here
                        </p>
                      </div>
                    </div>
                  </Tab>

                  <Tab key="sharedbyyou" title="Shared by you">
                  <div className="space-y-5   h-screen flex flex-col  justify-center ">
                      <div className="space-x-5 flex justify-center">
                        <Image
                          className="w-24"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEUBAQHxXnX/////yhkAAADaVWrmthf3YHjdVmtFGyLhV21aWlqePk2jo6OZmZnQUWVuKzZ1Ljlubm7/0BrquRf/0Rrwvhj2wxhjJzC8SVvX19dpaWn7Ynr4+Pjh4eHx8fHJycngsRZNPQiOjo7p6eknJye/v793d3fJnxSohRGWdw/AmBM2NjaqqqpLS0suLi5XRQnVqRW3t7eKbQ45LQayjRKUdQ9nUgp6YQyBgYE/Pz8dHR0VEQMoIAVENgfNohUfGQR0XAwtJAUUFBQfDA8rERWINUJTISm/S11UVFRJOQc8LwZrVQtTQgghGgQVCQqUOkglDxI2FRsEGTAfAAAOJ0lEQVR4nO2deVvaTBDA07BCrQVbCUGDXIIgIrcKeOHR2mrt8fb7f5g3gQR2NrtJyOaCMn+0ffoQsj9mdq7dTQRx3UUIewC8kq8qyUo9Vx8nFfoHVppQqVV2ztBczipVyodWlVDpj88EnUyYifbPivmTK0eYL5ZSe8cIwglzSMFkq6tEWFQVt3NMRcMYa8RVK0JYLLX2rp6s4RiI0Ses1lI7DKNkIBbA9VEmLCqt8csycDriWR7/logSFkqp3NXSbAZiCv+q6BEq/Ur72i3cjBDhSowQYb6oJMed5a3SRonRIMwXSpW9Dj+aQdjBvjt0wrzSr7dtgpwdEHktMNMwCYu1ZI5vxhl5241AIGIxMRzCYqFfWSrIMeFufgxPL3qy3LzHvwfPTwMnrCqt+gsfm0533x01TnqSLEnxeFxq4l+HXsIhLKjZSYcXbgogDAcXvbIkTeFmUr7FCY+DJswrrcoVp1XihBcyxjYTqYsTokWl6DdhvlpK1XnhTK4ybhZpBAgXRZSPhHmsBHePNpW7G+BHuqQCNcIG+EjLZ8J8qVU/e+JMvXQ41Z3Ee+BbUINGCF1N3TfCvFrs5J74rFK/9rF7eTGRZc2fQP2gHsVK470bujP1kLBaUEvwaz5voge5o7fT5jQOSGYvIqCfFBWqH3rECa+L3hJWS8mcsxLchg0J3UFjUpagr+wJgPCUSigznCk3YbWfclGl0uBu1exkGuNMgYAw0gldhwPwqZIHhFqx0/YE7vb1odEsy+Ygp499CMZ+bv6UJGezMehq5gWUO0KsBHeJZuA9qtnJpCybFYcL9KQD/KOSLGdjMynTnenShEp/zFnsLABPm+U4xSpJBV1AIz2R5oqL4ZIGhGfLE+aLpWSd1Yp1RdiVbdhmIj8AQkGeGaVJMufA1RgloiPCYqFWyR1zspmupQZumg4JIzWz6Tocgc8ZeZsdYVErwfmCnKH2oxH0GKjsDLAJCXtpFiF0uX17QrUE3+FUnH71Tfey0YtL2SMHgdtMCFVzw1JhLD2hFsFUwmKhVfEmyN2rJbgRByQiu6QHbkineZNzcNWIpcJYLAtcTZtBWFWS9TanM9GD3LQEx4KcGriBK+hZEhreJA2DADphE8buwScphIXWfL2RB02FezOV4HEirRLQKwsQC3Ea4Sk0UpkNGBsCwiJJ2OLKK40Zdz5qNBkxrgeLvAGtBJLNUeAnuGqYYQOmB4CwBAlrHV668+7g4iTOzk7UwA3NTSLYKCFOFQle1bQw0jRMDVqAMMk17e4eLps9C7gZAwzcj/PpKVMUxxo1sjJSIm/bwwnrPID3tnAzgUY6kiwUhxESk9fCSEl9X2GE46UAydRkKNvCxaeBG3zHxAZNlyyMMBcWRqrKHaUI1gj7jgH1IAfH6iz5IgI3slTGQoXNJYw0loHOtGAQVh0AGnHgZjho9C4ddE1MIhNGaq0M6pjV0tD6d0lfUpypSrhnDbgIcmoJrgUCGSZfrw6MVJ1wREJjFbhxIdIg66vSJ2AiVnRCxUKFRgmuBbl5dlJeJvmSdG9CBG7kjI8YMirbfB4605xOWKcD6kFuOGgSJbij1p6uuIWnTN+Bqx4cGimcvD9sL7gxO1MhT6rQsMrzEb0EJ5KvH9TUxBTiiE6EVeDGJPsIrhrYXUUUwVNnKtSIJQHNVx4NGhNa02tmpLC1dykRcNQQR9RugrVPnF/VI3J1O8I0zCqmzlSoQJvrnjYnklUAJ5OviWTNpgtU/NCZCtOwQfholx5Q8zYhB8Z7YZudyG/Qf8f1Ks5aZPiz2ATuufyAk9c2hqqeCb9g6kyFDn7rn/aeH6xEal0T2x/W/NuiuDPAuPPSUJcsuM908ULAZxW1oiGMtLnk1JgRwsB95zChWS7CpNNpGD9nRbBwjf/XpT0h9N+PjoZKBu6Gw1gB+xfs0lBly2TLk9OHH/A+U2cKrXRk15yVCf89cqQNmF0KTo1UdpB1q2yZbO9idHRLqd+neZvQxgmP2C50FuKW6ZosJAOd+K1DIyUmLznhNauUm423X8ye2dSZgmiBEC1842HAXfIVI1bHHBopzH+7i6tUxcXk8sWgi5hws2u0IlhoQcdBGiXxw2Wgkb45M9LJctmlLjJt8mpw8Unj4VWwQjOu0TqKggJtXVoojnZXyU3ylRm48U5pwmtLmXQmXW4Oft467gfOCEFeqhUKVrkJkXw5NVLoE22zS/1eMMIcTRqjW2ujNBNWprXFFU74Zn13Ymo4TL6I7HLiMOu+gQ54+V7nbFcNrJ7Qo/XEkhz4b5MQ3unWSRJEloauZFYgCmIS/MDWdyWybsnRWGN3S3qntCZwadsNHzrOm2t81Zla3hpOjZ/OzG2Jnu4sxvUagzuedRNhZtNto9dWBYSW988KFP9tJ6R3YhjpLPM6uXz74cm6UCeHrR8CV3Np1TUnWnvO4loGGmnXbKTTzGtyMXqlZV7LoiF0Nk6Wiott0CohqBApA1iMBGbdNq09Qyx7unrmNbzhWvMy4K5fUn14YGZGCFzNudVg4Vit1I0xMLJLU+bFBXfd3muVaKcPp4QlfCIKbP8IV5EtFtSBZLom76TBqbXO26sniuvkKrVCkQpH63lblbRE18RhX57odTcy6V5zcPSLC85Qe2fcKuXZbHNCERTBbAeZJlY4nRkpsZNiuGzmRYfr7KRqphnHJgSuhrmgkCb68s6SL1gaCuSG5uXhrl/qLYU+49iEwNV0mYTEgrqjDlQ6dus+skE0NUfZq9SqFjOOTVjCCe9ZI1+uL68lXrF48/SIPzeZxbiWYjvj2IR54GpY7eiy0+RLZcsamRe3UQpXO6mSwxnHJhSf8LEzWi9E8kXd9WFkXsNzL+Cud8bLzTgLwj0HzpRYUCdzHyPzuvvlRRi43kvVii6tkkqYcuBM2X15rRErN0/nmZc7Ov3ap6txn/H4Bx5C4GroRTCZfEm64mJSucGbeenXtnOcM86CsAhcDVWHGXLXh5Z5nZwO7zzQG3raqfQL/DPOgjAPGt/0oojYxtocvHLVA4sZp5Y6PrFhhDCrocUBoi/vpi9EXnvcrtS8nXFWhKDxTWtJZ974UxNhMePqScWHGWdFCAooIhBocUCa3PARzl2RNuP8tUo6YQEnnC+cTDOv8sXlT558eVHq1B2UOr4Rih3cmUppTXFa5jW6Qx7MuLOdYGacJeELKIKz5eaAM/PS4V7GSQ8SLy8Igat5vPcgrbzOJWvBTjiG6IQ1mJPxVTzC0/FOqqVKMlzpVzHCqifnfAzEyMiLstjn7SVhZARpOzANwvY6EmqMeYMwtZ6EAkoahMl1JWyvPeHTulupGrvWnVDYEK6B/JuEYSdbvGJLiL5sr7T8RbaE+x/er7J8d0K4tcLy/mBDuCGMumwIN4TRlw3hP0L4PuxR8ogzHa60OMjaPiXerbAkdjeEG0JXd00kZn95/cW0e4VAmEjsPu9//f1l+/PHD/4zhkCYONieNxh+P7/zmzFwwsSHb1jrRGU8OPTw22k3DJgwsUU80AahfX/VGDBhYuu3qU+Jvhz4iRi0Dv+aADU1fvZRjcESJj5TO83qbNz1DTFYwi3mIWTkm1MNlPCQrsIZ4tddf5xqoIQJqw0Qqhp9yXGCJEx8t9zi4ZMaAyX8aLOihdAf72djoITPcEWLhrjtuRoDJcQdDTo2rXtNEdGfQ4/T4NAI68U2Q41bniKGR7in3YU2MRH66GmqHyahWDijq/Gbh3VjuITaTlb6bPROjWETisqVz2oMnXCqRjOioJbG3tw2AoSick1XozelcRQIGU+9VWejF2qMBqFYOqYzfuKfjREhFPPUpzOrpfF33iwuKoTTo0i+dDiiQyjm9+iIX/jUGCFCUaw9UeMGX4cjUoRicYeuxr8cyXi0CKcPE6cyfnc9hqgRMtXoOlGNHKEotujJuNuOagQJxSqtNEZ/3d41goTTt0+Ylzf+uBtGNAnFglmN6Iu7sBhRQpoaXc7EyBKKBbI0Rs9rRmhqVKF9V2YaZUJROQMt5O31IyQelfN1DQlBCwf9XTtCBXZT0bd1IyQ74ujzevnSqqkd7rIvFVVCSsBH65S1UZI21UjXKGuj1U8IvXd51+gR0osn1yVw9AgZBbDrQUSNsMpoYrjLuiNIyGpEcSwnRoqQ2Uzk2aARJUJfGsIRImQ19f9z3yqNFmHpyZ+FmagQaotrtBjxH/fiWkQIWQuknz3YrhAJQj8XuaNAqDBmoEd7+EMnzDP2DAlencMIm1Bh7Pva92zfV8iE/m/6CpcwiI17oRLS32/u8ebLEAlfGGm2xxtoQ93nzaiTvD7tGK29+ttbnp9HCJTwwPqRmr4cRgj2zMwH6zMzX3053hXsuadvbEK/DgUFfO7pO4uQs1NhedNgzx9u0xF9PJwXNCH1AKK2/XBdzpBS3am/h2QDPwd8+JFcFeTdP2ongZ/HPzzAkxnkyVZuSwn+mQqJD5/05zVqf371V4HvwiBU1bj1vP17ird/4P/DP8J6tsn73d3drQ8eHzWk3yus59MkAnl0y7sQCQOTDeGGMPqyIdwQRl82hBvC6Mu/Rjh/vwV4J/D+ahPi7S8012EL/9/fYQ+SSw7/4Cwdg7AGNPt8mFhZOQTNL/RiECpwDeXv88dVlU9wN3zdIARvPV7xF1zgjhT154R1m2Wi1RSEinPCmvUy0YoKas/fuyaKV2tIiL9Zbj2ViF5EjBB/U+eaCEIKIMwLa4aIUEsEhOCduWsgCI1FglB79k/Yw/JOEKqIJkKxeIXWRI8qR1+kEKoZ+NMaMGqJTc54DTFJKOaT7VBTLk+kU1+8Q9pEqEq1XxnndlZV6uOUgr//m0a4XvI/rrBrxAo45dkAAAAASUVORK5CYII="
                        />
                      </div>
                      <div className="flex justify-center">
                        <p className="text-gray-500 text-md">
                        Videos you shared with others will appear here                        </p>
                      </div>
                      <Button className="w-32 mx-auto" >Share files</Button>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Tab>
            <Tab key="schedule" title="Schedule">
                <p>A calender is supposed to appear here.</p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
