import { useTranslation } from 'react-i18next'


const RightPillButtons = () => {
    const { t } = useTranslation()

    return (
        <div className=" bg-white z-50 hidden lg:block mb-4 w-64">
            <div className="flex-col xl:w-44 uppercase float-right">
                <div
                    className="flex h-10 transation-al duration-100 cursor-pointer justify-between items-center p-2 m-2 px-2 text-yagya-red bg-white border-2 rounded-full border-yagya-red">
                    <div className="py-2 ">
                        <select
                            className="outline-none transation-al duration-100 cursor-pointer uppercase">
                            <option> {t('English')} </option>
                            <option>{t('español')}  </option>
                            <option> {t('Deutsch')}</option>
                        </select>
                    </div>
                    <img src="../img/icons/Language.png" alt="" />
                </div>
                <div
                    className="flex h-10 transation-al duration-100 cursor-pointer justify-between items-center p-2 m-2 px-2 text-yagya-red bg-white border-2 rounded-full border-yagya-red">
                    <div className="py-2"> {t('login')} </div>
                    <img src="../img/icons/LoginRed.png" alt="" />
                </div>
                <div
                    className="flex h-10 transation-al duration-100 cursor-pointer justify-between items-center p-2 m-2 px-2 text-yagya-red bg-white border-2 rounded-full border-yagya-red">
                    <a href="/made4me.html" className="py-2">{t('made for me')}</a>
                    <img src="../img/icons/StarPointer.png" alt="" />
                </div>
                <div
                    className="flex h-10 transation-al duration-100 cursor-pointer justify-between items-center p-2 m-2 px-2 text-yagya-red bg-white border-2 rounded-full border-yagya-red">
                    <div className="leading-none py-2">{t('something special')}</div>
                    <img src="../img/icons/HeartRed.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default RightPillButtons