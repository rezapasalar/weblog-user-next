import Button from '../../../components/global/elements/button'
import LogoSvg from '../../../components/global/svg/logo'

export default function BannerStart () {
    return (
        <div className="grid lg:grid-cols-2 items-center gap-5 overflow-hidden px-6">
            <div className="relative mx-auto text-center w-3/4 lg:w-2/3 space-y-6 sm:mb-0 mb-5">
                <p className="text-gray-500 dark:text-gray-100 text-3xl lg:text-4xl font-extrabold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                <Button>دانلود اپلیکیشن</Button>
            </div>
            
            <div className="relative text-center flex justify-center">
                <figure className="absolute bottom-0 mt-4 mb-0">
                    <svg width="550px" height="538px" viewBox="0 0 554 544"><path className="fill-indigo-700 dark:fill-gray-800" d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"></path></svg>
                </figure>

                <figure className="absolute top-[50%] left-[50%] -mt-[5rem] animate-pulse" style={{transform: 'translate(-60%, -50%)'}}>
                    <svg className="fill-yellow-400"><path d="m22.3 57.6v0.1c-0.1 0.3 0.1 0.6 0.3 0.7 0.3 0.2 0.7 0.2 1 0.2h1.4c1.3 0.1 2.6 0.1 3.9 0.1 1.2 0 2.4 0 3.7 0.2s2.6 0.1 3.9 0.2c0.8 0.1 0.8-1.2 0-1.3-1.2-0.1-2.5 0-3.7-0.2-1.2-0.1-2.3-0.2-3.4-0.2-1.2 0-2.4 0-3.6-0.1-0.6 0-1.1-0.1-1.7-0.1-0.2 0-0.7 0.1-0.8 0 0.1 0.2 0.2 0.5 0.3 0.7v-0.1c0.2-0.7-1.1-1-1.3-0.2z"></path><path d="m23.3 57.6c-0.1-0.5-0.2-0.8-0.1-1.3v-1.2-2.9c0-0.4-0.1-0.7-0.2-1.1 0-0.4 0-0.8-0.1-1.1-0.1-0.2-0.3-0.4-0.5-0.6-0.4-0.3-0.7-0.5-1-0.9-1.2-1.3-2.7-2.3-3.8-3.7s-1.8-2.9-2.2-4.6c-0.1-0.5-0.2-1-0.3-1.4s-0.2-0.8-0.2-1.3c0-0.8 0-1.7-0.1-2.5-0.1-0.7-0.3-1.5-0.2-2.3s0.5-1.8 0.9-2.5c0.8-1.5 1.5-3.1 2.6-4.4 0.5-0.6 0.9-1.3 1.5-1.8 0.6-0.6 1.3-1.2 1.9-1.8 0.7-0.5 1.4-1.1 2.2-1.5 0.7-0.3 1.4-0.4 2.1-0.6 0.7-0.1 1.3-0.2 2-0.4 0.9-0.3 1.7-0.6 2.7-0.8 0.9-0.2 1.8-0.1 2.8-0.1 1 0.1 2 0.1 2.9 0.4 0.8 0.2 1.6 0.3 2.3 0.6 0.8 0.3 1.5 0.8 2.2 1.4 1.4 1.2 2.7 2.6 3.8 4.1 0.5 0.7 1.1 1.5 1.5 2.2 0.4 0.8 0.8 1.7 1.2 2.5 0.7 1.7 0.7 3.6 0.7 5.5 0 0.9-0.1 1.8-0.3 2.6l-0.6 2.7c-0.5 1.8-1.7 3.5-3 4.9-0.6 0.7-1.5 1.3-2.3 1.8-0.4 0.3-0.9 0.5-1.3 0.7s-0.7 0.4-1.1 0.6c-0.7 0.2-1.7 0.3-2 1-0.1 0.4-0.1 0.7-0.1 1.1 0 0.5-0.1 1-0.2 1.4-0.1 0.9-0.2 1.9-0.3 2.8-0.1 0.5 0 1 0 1.5 0 0.3 0 0.9-0.1 1.2-0.4 0.7 0.7 1.4 1.1 0.7 0.3-0.5 0.3-1.4 0.3-2.1 0-1 0.1-1.9 0.2-2.9 0.1-0.9 0.3-1.8 0.3-2.7v-0.5c0-0.2-0.1-0.1 0.2-0.1 0.4 0 0.9-0.3 1.3-0.4 1.6-0.7 3.1-1.7 4.4-2.8 0.6-0.5 1.1-1.3 1.7-1.9 0.6-0.7 1-1.6 1.5-2.4 0.4-0.7 0.6-1.5 0.8-2.3 0.2-1 0.5-2 0.7-2.9 0.3-2 0.2-4-0.1-5.9-0.1-0.9-0.4-1.6-0.7-2.4-0.4-0.9-0.8-1.9-1.3-2.7-1-1.7-2.2-3.3-3.6-4.6-1.2-1.2-2.4-2.4-4-3.1-0.8-0.3-1.6-0.4-2.4-0.7-1-0.3-1.9-0.4-3-0.5-1-0.1-2-0.2-3 0-1 0.1-2 0.5-2.9 0.8-1.5 0.5-3 0.5-4.5 1.1-1.6 0.7-2.9 1.9-4.1 3-0.3 0.3-0.6 0.5-0.9 0.8s-0.5 0.7-0.7 1c-0.3 0.4-0.6 0.7-0.9 1-0.3 0.4-0.6 0.8-0.8 1.2-0.5 0.8-0.8 1.6-1.3 2.5-0.4 0.8-0.8 1.6-1.1 2.5-0.2 0.8-0.4 1.5-0.3 2.4s0.2 1.8 0.2 2.7c0 2 0.6 4 1.2 5.9 0.7 1.9 2 3.6 3.5 5 0.8 0.7 1.6 1.4 2.3 2.2l0.5 0.5c0.2 0.1 0.4 0.2 0.5 0.4 0.2 0.2 0.2 0.9 0.2 1.2 0.2 1.1 0.1 2.3 0.1 3.4v1.4c0 0.5 0.1 0.9 0.2 1.4 0.1 0.7 1.3 0.4 1.1-0.4z"></path><path d="m27.1 56.7c0.1 0 0.1 0 0 0 0.4 0 0.7 0.1 1 0.1-0.2-0.4-0.1-1.1 0-1.5 0-0.8 0.1-1.7 0.1-2.5 0-1.6 0-3.2-0.1-4.8-0.2-3.1-0.1-6.3-0.5-9.4-0.1-0.7-0.2-1.3-0.4-2-0.1-0.7-0.2-1.3-0.6-1.9-0.7-0.9-1.9-1-2.9-0.6-1.1 0.5-1.8 1.4-1.6 2.7 0.1 0.6 0.2 1.2 0.6 1.7s0.9 1 1.4 1.4c2.1 1.7 5 2.5 7.7 2 1.4-0.3 2.8-0.8 4.2-1.3 1.3-0.5 2.3-1.2 3.2-2.2 0.7-0.8 1.3-2.3 1.1-3.3-0.3-1.1-1.5-1.8-2.6-1.9-1.3-0.1-2.3 0.4-3.1 1.3-0.9 1.1-1.3 2.3-1.7 3.6-0.4 1.6-0.3 3.3-0.3 4.9-0.1 1.7-0.1 3.4-0.1 5.1-0.1 1.8-0.2 3.5-0.4 5.3-0.1 0.9-0.1 1.7-0.1 2.6 0 0.7-0.1 1.5 0.1 2.2 0.2 0.8 1.5 0.5 1.3-0.3-0.1-0.4-0.1-1-0.1-1.5 0-0.6 0-1.3 0.1-1.9l0.3-3.9c0.2-2.5 0.2-5 0.3-7.5 0-1.2 0-2.5 0.1-3.7 0.1-0.6 0.3-1.2 0.5-1.8s0.3-1.1 0.6-1.5c0.6-0.9 1.3-1.6 2.4-1.5 0.5 0 1 0.2 1.3 0.5 0.4 0.5 0.2 1.1 0 1.6-0.3 1-1.3 1.9-2.2 2.4-1 0.5-2.2 0.8-3.2 1.1-1.3 0.4-2.5 0.8-3.8 0.6-1.1-0.1-2.3-0.5-3.3-1-0.4-0.2-0.9-0.5-1.3-0.8s-0.9-0.7-1.2-1.2c-0.2-0.4-0.4-1.1-0.3-1.6 0.2-0.5 0.7-0.8 1.2-0.9 1.3-0.3 1.3 1.2 1.5 2.1 0.3 1.3 0.4 2.5 0.4 3.8 0.2 2.9 0.3 5.8 0.4 8.7 0.1 1.5 0 2.9-0.1 4.4 0 0.9-0.4 2.4 0.2 3.3 0.2 0.3 0.6 0.4 0.9 0.2 0.2-0.1 0.3-0.2 0.4-0.4 0.1-0.7-1-1.4-1.4-0.7z"></path><path d="m17.2 44.3c-0.4-0.3-0.4-0.9-0.7-1.2-0.4-0.5-0.8-1.1-1.1-1.7-0.6-1.2-0.9-2.6-1.1-4-0.1-0.6-0.3-1.2-0.3-1.8v-2.1c0-0.4-0.1-0.7-0.1-1.1 0-0.3 0.1-0.7 0.2-1 0.1-0.7 0.4-1.4 0.7-2.1 0.6-1.3 1.5-2.5 2.3-3.6 0.8-1 1.7-2 2.6-3s2.3-1.7 3.5-2.3c0.7-0.3 1.3-0.6 2-0.8 0.6-0.2 1.3-0.2 1.9-0.4 0.7-0.2 1.4-0.2 2.1-0.2 0.3 0 0.6-0.1 0.8-0.1 0.4-0.1 0.9 0 1.3 0 1.4 0 2.8 0.1 4.2 0.7 0.6 0.2 1.3 0.4 1.8 0.7 0.6 0.3 1.2 0.6 1.8 0.8 1 0.5 2 1.4 2.8 2.1 1 0.9 1.7 1.9 2.4 3 0.6 1 1.6 1.9 1.9 3 0.2 0.7 0.5 1.3 0.6 2.1 0.1 0.7 0 1.5 0 2.2 0 1.5 0 2.9-0.1 4.4-0.1 0.9-0.2 1.7-0.3 2.6-0.1 0.4-0.1 0.8-0.1 1.2s-0.2 0.7-0.3 1c0 1.3-1 2.6-2.1 3.6-0.5 0.4-1 0.8-1.6 1.1-0.6 0.2-1.2 0.6-1.8 0.9s-1.3 0.5-1.9 0.8-1 0.4-1.3 1c-0.3 0.8 0.9 1.1 1.3 0.3-0.1 0.2 0.1 0.1 0.2 0 0.1 0 0.2-0.1 0.3-0.2 0.3-0.1 0.6-0.2 0.9-0.4 0.6-0.3 1.3-0.5 1.9-0.8 0.5-0.3 1.1-0.5 1.6-0.9 0.6-0.4 1.1-0.7 1.6-1.2 1-0.9 1.9-2.2 2.4-3.4 0.2-0.6 0.5-1.2 0.6-1.8l0.3-2.4c0.2-1.6 0.3-3.3 0.3-4.9s0.1-3.1-0.4-4.7c-0.2-0.6-0.4-1.2-0.7-1.7-0.3-0.6-0.7-1.1-1.1-1.6-0.9-1.1-1.5-2.4-2.5-3.4-1.9-1.9-4-3.5-6.6-4.3-0.7-0.2-1.3-0.5-1.9-0.7-0.8-0.2-1.5-0.4-2.4-0.4-0.8 0-1.5-0.1-2.3-0.1-0.7 0-1.5 0.2-2.3 0.2-0.7 0.1-1.4 0.3-2.1 0.4-0.8 0.1-1.4 0.3-2.2 0.5-1.4 0.5-2.8 1.3-4.1 2.1-0.6 0.4-1 0.8-1.5 1.3-0.5 0.6-1 1.1-1.5 1.6-1 1.1-1.9 2.3-2.7 3.6-0.9 1.4-1.4 3-1.6 4.6-0.1 0.8 0 1.7 0.1 2.6 0 0.7-0.1 1.4 0 2.2 0.2 0.8 0.3 1.6 0.4 2.4 0.2 0.8 0.5 1.7 0.8 2.5 0.3 0.7 0.7 1.4 1.2 2 0.2 0.3 0.3 0.5 0.5 0.9 0.1 0.3 0.3 0.6 0.5 0.8 0.7 0.5 1.6-0.4 0.9-0.9z"></path><path d="m22.8 62.6c1.1-0.4 2.2-0.4 3.4-0.5 1.1-0.1 2.2-0.1 3.3-0.1s2.2 0.1 3.2 0.3c1.1 0.2 2.2 0.5 3.3 0.4-0.2-0.4-0.3-0.7-0.5-1.1-0.2 0.3-0.7 0.3-1 0.5-0.6 0.2-1.1 0.4-1.7 0.5-1.2 0.4-2.5 0.7-3.7 1.1s-2.4 0.7-3.6 1.1c-0.6 0.2-1.2 0.3-1.8 0.5s-1.3 0.5-1.8 0.5c0.1 0.4 0.1 0.9 0.2 1.3 1.1-0.4 2.3-0.4 3.4-0.4 1.2-0.1 2.4-0.1 3.6-0.1s2.4 0.2 3.6 0.6c0.9 0.3 2.1 0.8 2.9 0.3 0.7-0.4 0.1-1.6-0.7-1.1-0.4 0.2-1.2-0.2-1.6-0.3-0.6-0.2-1.1-0.4-1.7-0.5-1.1-0.2-2.2-0.3-3.3-0.3s-2.3 0.1-3.4 0.1c-1.1 0.1-2.2 0.1-3.3 0.5-0.7 0.2-0.6 1.3 0.2 1.3 0.6 0 1.2-0.2 1.8-0.4s1.2-0.4 1.9-0.5c1.4-0.4 2.7-0.8 4.1-1.2 1.3-0.4 2.6-0.8 4-1.2 0.5-0.2 1.1-0.4 1.6-0.5 0.4-0.1 0.9-0.3 1.2-0.6 0.3-0.4 0.2-1.2-0.5-1.1-1.1 0.1-2.3-0.3-3.4-0.5s-2.2-0.3-3.4-0.3-2.4 0.1-3.6 0.2c-1.1 0.1-2.2 0.2-3.2 0.5-0.7 0-0.3 1.3 0.5 1z"></path><path d="m22.8 57.6c-0.1-0.3-0.1-0.7-0.2-1s-0.1-0.7-0.1-1 0.1-0.7 0.1-1-0.1-0.7-0.1-1v-1c0-0.3-0.1-0.7-0.1-1v-1c0-0.1 0-0.3-0.1-0.4v-0.2 0c-0.4 0.1-0.8 0.1-1.2 0.2 0 0 0 0.1 0.1 0.1 0.4 0.7 1.5 0.1 1.1-0.7 0 0 0-0.1-0.1-0.1-0.3-0.5-1-0.3-1.2 0.2-0.1 0.3 0 0.5 0.1 0.8s0 0.6 0 1 0.1 0.7 0.1 1.1c0 0.3-0.1 0.7 0 1 0 0.3 0.1 0.7 0.1 1 0 0.4 0 0.8-0.1 1.2 0 0.4 0 0.7 0.1 1.1s0.1 0.8 0.2 1.1c0.3 0.8 1.6 0.4 1.3-0.4z"></path><path d="m19.5 21.6c-1.6 1.9-3.2 3.9-4.4 6.1-1.1 2.2-1.8 4.6-2.1 7-0.3 2.5 0.3 4.9 1.2 7.3 0.9 2.3 2.4 4.1 4.3 5.5 0.7 0.5 1.3-0.6 0.7-1.1-0.9-0.7-1.7-1.4-2.4-2.3s-1.1-2-1.5-3.1c-0.8-2.1-1.1-4.3-0.8-6.5s1-4.4 2-6.3c1.1-2.1 2.6-3.9 4.1-5.7 0.3-0.6-0.6-1.5-1.1-0.9z"></path><path d="m29.1 4.1c-0.1 0.5-0.1 1-0.1 1.4v1.4c0 1-0.1 2-0.2 3 0 0.3 0.3 0.6 0.6 0.6 0.4 0 0.6-0.3 0.6-0.6 0.1-1 0.2-1.9 0.2-2.9v-1.4c0-0.4 0-0.8 0.1-1.2 0.3-0.7-0.9-1.1-1.2-0.3z"></path><path d="m2.2 15c0.5 0.2 1 0.6 1.4 1 0.5 0.4 1.1 0.8 1.6 1.2 1.2 0.8 2.4 1.7 3.5 2.6 0.3 0.2 0.7 0.3 0.9 0 0.2-0.2 0.3-0.7 0-0.9-1.2-1-2.5-1.9-3.8-2.8-0.6-0.4-1.1-0.8-1.6-1.2-0.5-0.5-1.1-0.9-1.7-1.1-0.3-0.1-0.7 0.1-0.8 0.5-0.1 0.2 0.1 0.5 0.5 0.7z"></path><path d="m50.1 21.3c2.3-1.7 4.6-3.5 6.7-5.4 0.6-0.6-0.3-1.5-0.9-0.9-2.1 1.8-4.2 3.6-6.5 5.2-0.3 0.2-0.4 0.6-0.2 0.9 0.2 0.2 0.6 0.4 0.9 0.2z"></path><path d="m30.3 2.6v-0.1c-0.4-0.1-0.9-0.1-1.3-0.2 0.1 1.5 0.2 2.9 0.1 4.4 0 1.5-0.1 2.9-0.1 4.4 0 0.8 1.3 0.8 1.3 0 0-1.5 0.1-2.9 0.2-4.4s0-2.9-0.1-4.4c-0.1-0.7-1.1-0.9-1.3-0.2v0.1c-0.3 0.9 1 1.2 1.2 0.4z"></path><path d="m1.1 14.2c0 0.6 0.6 1.1 1.1 1.4s1.1 0.5 1.7 0.7h0.1c0.1 0-0.1-0.1 0 0 0.2 0.1 0.5 0.2 0.7 0.3 0.5 0.2 0.9 0.5 1.4 0.7 0.9 0.5 1.7 1 2.5 1.6 0.3 0.2 0.7 0.3 0.9 0 0.2-0.2 0.3-0.7 0-0.9-1.5-1.1-3.2-2-4.9-2.8-0.4-0.2-0.9-0.3-1.2-0.5-0.3-0.1-0.5-0.2-0.7-0.4l-0.2-0.2c0.1 0 0 0 0 0.1v0c0-0.8-1.3-0.8-1.4 0z"></path><path d="m52.1 19.7 0.3-0.3c-0.1 0 0 0 0 0 0.1-0.1 0.3-0.2 0.4-0.3l0.9-0.6c0.6-0.4 1.2-0.8 1.8-1.1 0.3-0.2 0.4-0.6 0.2-0.9s-0.6-0.4-0.9-0.2c-1.3 0.7-2.6 1.5-3.7 2.5-0.3 0.2-0.2 0.7 0 0.9 0.4 0.3 0.7 0.3 1 0z"></path><path d="m20.2 49.3c-0.1 0 0 0 0 0 0.1 0.2 0.1 0.3 0.1 0.4 0.1 0.3 0.2 0.6 0.4 0.9 0.3 0.7 0.5 1.5 0.7 2.3s0.2 1.7 0.3 2.5c0.1 0.7 0.1 1.6 0.5 2.2 0.4 0.7 1.6 0.1 1.1-0.7-0.2-0.3-0.2-0.6-0.2-1 0-0.5-0.1-0.9-0.1-1.4-0.1-0.9-0.2-1.8-0.4-2.7-0.2-0.8-0.5-1.5-0.8-2.3-0.2-0.5-0.3-1.2-0.8-1.4-0.3-0.1-0.7-0.1-0.9 0.2-0.3 0.4-0.3 0.9 0.1 1z"></path></svg>
                </figure>

                <figure className="absolute top-[20%] md:top-[30%] right-0 md:right-[20%] bg-white/80 dark:bg-gray-700/60 rounded-md shadow-lg -mt-[5rem] p-2">
                    <LogoSvg className="h-10 w-10 animate-[spin_5s_linear_infinite]" />
                </figure>

                <figure className="fill-yellow-400 absolute bottom-2 md:bottom-5 left-0 md:left-[15%] ml-5">
                    <svg width="42px" height="42px" className="animate-pulse">
                        <path d="M21.000,-0.001 L28.424,13.575 L41.999,20.999 L28.424,28.424 L21.000,41.998 L13.575,28.424 L-0.000,20.999 L13.575,13.575 L21.000,-0.001 Z"></path>
                    </svg>
                </figure>
            
                <div className="relative min-h-[538px]">
                    <img src="img/home/man.png" />
                </div>
            </div>
        </div>
    )
}