import React from "react";

export default function MurliQuestion() {
  return (
    <>
      <div className="w-full px-4 py-4 md:px-8 lg:px-20 md:py-8 lg:py-20">
        <div className="w-full mx-auto bg-white xl:w-3/5 bg-opacity-95">
          <div className="relative w-full h-full">
            <div className="flex jsutify-between">
              <img
                className="w-8 md:w-12 h-8 md:h-12 absolute right-[-14px] md:right-[-24px] top-[-9px] md:top-[-22px] cursor-pointer hover:bg-red-400 transition-all duration-150 p-2 rounded-full bg-white border border-gray-600 mx-auto object-cover"
                src="/img/svg/icons8-close-50.png"
                alt=""
              />

              <img
                className="object-cover w-full h-full mx-auto"
                src="/img/Rectangle.png"
                alt=""
              />
            </div>
          </div>

          <div className="border border-gray-400 bg-white">
            <p className="p-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ab ducimus natus. Debitis, temporibus maxime. Iste
              doloremque alias quis rem. Iusto iste optio aperiam, voluptates
              rerum, natus nemo quisquam perspiciatis quasi, minima vitae
              aspernatur earum similique quia error facere ab necessitatibus
              quae dolorem. Eveniet nemo at dignissimos id voluptatum. Dolores
              inventore non voluptatibus nihil temporibus voluptatem facilis,
              molestiae ad voluptas unde. Sunt, veritatis consectetur reiciendis
              nesciunt labore omnis, aspernatur explicabo id.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              necessitatibus, tenetur mollitia veritatis quia explicabo atque
              voluptatum dolorum, ab repudiandae ad a possimus ipsa porro
              sapiente pariatur tempora soluta non.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
