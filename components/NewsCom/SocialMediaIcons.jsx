
const socialMediaData = [
  {
    image: "icons8-facebook.svg",
    buttonStyle: "bg-social_media_btn_fac"
  },
  {
    image: "icons8-twitter.svg",
    buttonStyle: "bg-social_media_btn_twi"
  },
  {
    image: "icons8-mail.svg",
    buttonStyle: "bg-social_media_btn_mee"
  },
  {
    image: "icons8-android-os.svg",
    buttonStyle: "bg-social_media_btn_and"
  },
  {
    image: "icons8-linkedin.svg",
    buttonStyle: "bg-social_media_btn_linkd"
  },
  {
    image: "icons8-spotify.svg",
    buttonStyle: "bg-social_media_btn_spo"
  },
  {
    image: "icons8-plus.svg",
    buttonStyle: "bg-social_media_btn_hos"
  }
]

export default function SocialMediaIcons() {
  return (
    <div className="absolute left-0 right-0 top-auto z-10">
      <div className="flex flex-col float-right w-full">
          {socialMediaData.map((sd, i) => {
              return <a key={i} href="#" className={`h-auto text-white fa socialMediaClass ${sd.buttonStyle}`}>
                  <img className="w-10 h-10 mx-auto" src={`/img/svg/${sd.image}`} alt="" />
              </a>
          })}
      </div>
    </div>
  );
}
