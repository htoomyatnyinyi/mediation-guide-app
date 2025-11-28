import {
  FaClock,
  FaBell,
  FaLaptopHouse,
  FaCheckCircle,
  FaPlay,
  FaStop,
} from "react-icons/fa";

const Purpose = () => {
  return (
    <div className="">
      {/* <div className="bg-linear-to-tr from-slate-900 via-white to-slate-900"> */}
      {/* // အပြင်ဘက် Container - ရှင်းလင်းသပ်ရပ်စေရန် */}
      <div className="max-w-7xl mx-auto  p-6 md:p-10  ">
        {/* ခေါင်းစဉ်
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold  flex items-center justify-center">
            <FaClock className="mr-3 text-4xl text-green-500" />
            တရားထိုင်ချိန် စီမံခန့်ခွဲမှု (Meditation Timer Logic)
          </h1>
          <p className="text-xl mt-3 bg-linear-to-l from-gray-800 to-black text-transparent bg-clip-text font-semibold">
            ဤကိရိယာသည် အသုံးပြုသူများအတွက် တရားထိုင်ချိန် (Meditation Session)
            ကို စနစ်တကျ စီမံခန့်ခွဲပေးပါသည်။
          </p>
        </div> */}

        <hr className="my-8 border-indigo-200" />

        {/* အဓိက ရည်ရွယ်ချက်များ */}
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaCheckCircle className="mr-3 text-green-500" />
          အဓိက ရည်ရွယ်ချက်များ
        </h2>

        <div className="space-y-6">
          {/* ရည်ရွယ်ချက် ၁: အချိန်သတ်မှတ်၍ ရေတွက်ခြင်း */}
          <div className="p-4 border-l-4 border-green-500 backdrop-blur-3xl rounded-lg shadow-2xl">
            <h3 className="text-xl font-semibold  mb-2">
              ၁. အချိန်သတ်မှတ်၍ ရေတွက်ခြင်း (Countdown Timer)
            </h3>
            <ul className="list-disc ml-6  space-y-1">
              <li>
                အသုံးပြုသူ သတ်မှတ်ထားသော မိနစ်အရေအတွက် (ဥပမာ- ၉၀ မိနစ်) အတိုင်း
                အချိန်ရေတွက်ခြင်း (Countdown) ပြုလုပ်ပေးပါသည်။
              </li>
              <li>
                မျက်နှာပြင်ပေါ်တွင် ကျန်ရှိသောအချိန်ကို{" "}
                <code className="underline p-1 rounded">
                  နာရီ:မိနစ်:စက္ကန့်
                </code>{" "}
                ပုံစံဖြင့် ပြသပေးပါသည်။
              </li>
            </ul>
          </div>

          {/* ရည်ရွယ်ချက် ၂: အသိပေး ခေါင်းလောင်းသံ */}
          <div className="p-4 border-l-4 border-yellow-500 backdrop-blur-3xl rounded-lg shadow-2xl">
            <h3 className="text-xl font-semibold  mb-2">
              ၂. အသိပေး ခေါင်းလောင်းသံ (Interval & Final Bell)
            </h3>
            <ul className="list-disc ml-6  space-y-1">
              <li>
                **ကြားခံ အသိပေးချက် (Interval Bell):** မိနစ် ၃၀ သို့မဟုတ် ၁ နာရီ
                ပြည့်တိုင်း သိမ်မွေ့သော ခေါင်းလောင်းသံ မြည်စေရန်
                သတ်မှတ်ထားပါသည်။
              </li>
              <li>
                **အဆုံးသတ် အသိပေးချက် (Final Bell):** သတ်မှတ်ထားသည့်
                တရားထိုင်ချိန် အပြီးသတ်သောအခါ ပိုမိုထင်ရှားသော ခေါင်းလောင်းသံ
                မြည်စေရန် သတ်မှတ်ထားပါသည်။
              </li>
            </ul>
          </div>

          {/* ရည်ရွယ်ချက် ၃: မျက်နှာပြင် မပိတ်စေရန် ထိန်းချုပ်ခြင်း */}
          <div className="p-4 border-l-4 border-blue-500 backdrop-blur-3xl rounded-lg shadow-2xl">
            <h3 className="text-xl font-semibold  mb-2">
              ၃. မျက်နှာပြင် မပိတ်စေရန် ထိန်းချုပ်ခြင်း (Screen Wake Lock)
            </h3>
            <p className="">
              တရားထိုင်ချိန် စတင်နေစဉ်အတွင်း ဖုန်း သို့မဟုတ် ကွန်ပျူတာ၏
              မျက်နှာပြင်သည် အလိုအလျောက်ပိတ်သွားခြင်း မဖြစ်စေရန် **Wake Lock
              API** ကို အသုံးပြု၍ တားဆီးပေးထားပါသည်။
            </p>
          </div>

          {/* ရည်ရွယ်ချက် ၄: ချွင်းချက်များ စီမံခန့်ခွဲခြင်း */}
          <div className="p-4 border-l-4 border-red-500 backdrop-blur-3xl rounded-lg shadow-2xl">
            <h3 className="text-xl font-semibold  mb-2">
              ၄. ချွင်းချက်များ စီမံခန့်ခွဲခြင်း (Handling Missed Events)
            </h3>
            <p className="">
              ဖုန်း Sleep Mode သို့ ရောက်သွားခြင်း သို့မဟုတ် Tab
              ပြောင်းသွားခြင်း ဖြစ်ခဲ့ပါက၊ ပြန်လည် နိုးထလာသောအခါ လွဲချော်သွားသော
              ခေါင်းလောင်းသံများနှင့် အချိန်အတိအကျကို ပြန်လည် တွက်ချက်၍
              ပြင်ဆင်ပေးပါသည်။
            </p>
          </div>
        </div>

        <hr className="my-8 border-indigo-200" />

        {/* အသုံးပြုပုံ */}
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaLaptopHouse className="mr-3 text-green-500" />✨ အသုံးပြုပုံ
          အဆင့်ဆင့်
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 p-5 backdrop-blur-3xl rounded-lg shadow-2xl border border-indigo-200 text-center ">
            <FaPlay className="text-4xl text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">စတင်ရန်</h3>
            <p className="">
              လိုအပ်သော မိနစ်အရေအတွက်ကို ထည့်သွင်းပြီး မိနစ် ၃၀ သို့မဟုတ် ၁
              နာရီကို ရွေးချယ်၍
              <span className="font-bold text-green-400"> "စတင်မည်"</span>{" "}
              ခလုတ်ကို နှိပ်ပါ။
            </p>
          </div>
          <div className="flex-1 p-5 backdrop-blur-3xl rounded-lg shadow-2xl border border-indigo-200 text-center">
            <FaStop className="text-4xl text-red-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">ရပ်ရန်</h3>
            <p className="">
              အချိန်ရေတွက်မှုကို ရပ်ဆိုင်းလိုပါက{" "}
              <span className="font-bold xl:text-red-700 text-red-500">
                {" "}
                "ရပ်မည်"
              </span>{" "}
              ခလုတ်ကို နှိပ်ခြင်းဖြင့် ရပ်ဆိုင်းနိုင်ပါသည်။
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
// import {
//   FaClock,
//   FaBell,
//   FaLaptopHouse,
//   FaCheckCircle,
//   FaPlay,
//   FaStop,
// } from "react-icons/fa";

// const Purpose = () => {
//   return (
//     <div className="">
//       {/* <div className="bg-linear-to-tr from-slate-900 via-white to-slate-900"> */}
//       {/* // အပြင်ဘက် Container - ရှင်းလင်းသပ်ရပ်စေရန် */}
//       <div className="max-w-7xl mx-auto  p-6 md:p-10  ">
//         {/* ခေါင်းစဉ်
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-extrabold  flex items-center justify-center">
//             <FaClock className="mr-3 text-4xl text-green-500" />
//             တရားထိုင်ချိန် စီမံခန့်ခွဲမှု (Meditation Timer Logic)
//           </h1>
//           <p className="text-xl mt-3 bg-linear-to-l from-gray-800 to-black text-transparent bg-clip-text font-semibold">
//             ဤကိရိယာသည် အသုံးပြုသူများအတွက် တရားထိုင်ချိန် (Meditation Session)
//             ကို စနစ်တကျ စီမံခန့်ခွဲပေးပါသည်။
//           </p>
//         </div> */}

//         <hr className="my-8 border-indigo-200" />

//         {/* အဓိက ရည်ရွယ်ချက်များ */}
//         <h2 className="text-2xl font-bold mb-6 text-black flex items-center">
//           <FaCheckCircle className="mr-3 text-green-500" />
//           အဓိက ရည်ရွယ်ချက်များ
//         </h2>

//         <div className="space-y-6">
//           {/* ရည်ရွယ်ချက် ၁: အချိန်သတ်မှတ်၍ ရေတွက်ခြင်း */}
//           <div className="p-4 border-l-4 border-green-500 backdrop-blur-3xl rounded-lg shadow-2xl">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               ၁. အချိန်သတ်မှတ်၍ ရေတွက်ခြင်း (Countdown Timer)
//             </h3>
//             <ul className="list-disc ml-6 text-gray-700 space-y-1">
//               <li>
//                 အသုံးပြုသူ သတ်မှတ်ထားသော မိနစ်အရေအတွက် (ဥပမာ- ၉၀ မိနစ်) အတိုင်း
//                 အချိန်ရေတွက်ခြင်း (Countdown) ပြုလုပ်ပေးပါသည်။
//               </li>
//               <li>
//                 မျက်နှာပြင်ပေါ်တွင် ကျန်ရှိသောအချိန်ကို{" "}
//                 <code className="bg-gray-200 px-1 rounded">
//                   နာရီ:မိနစ်:စက္ကန့်
//                 </code>{" "}
//                 ပုံစံဖြင့် ပြသပေးပါသည်။
//               </li>
//             </ul>
//           </div>

//           {/* ရည်ရွယ်ချက် ၂: အသိပေး ခေါင်းလောင်းသံ */}
//           <div className="p-4 border-l-4 border-yellow-500 backdrop-blur-3xl rounded-lg shadow-2xl">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               ၂. အသိပေး ခေါင်းလောင်းသံ (Interval & Final Bell)
//             </h3>
//             <ul className="list-disc ml-6 text-gray-700 space-y-1">
//               <li>
//                 **ကြားခံ အသိပေးချက် (Interval Bell):** မိနစ် ၃၀ သို့မဟုတ် ၁ နာရီ
//                 ပြည့်တိုင်း သိမ်မွေ့သော ခေါင်းလောင်းသံ မြည်စေရန်
//                 သတ်မှတ်ထားပါသည်။
//               </li>
//               <li>
//                 **အဆုံးသတ် အသိပေးချက် (Final Bell):** သတ်မှတ်ထားသည့်
//                 တရားထိုင်ချိန် အပြီးသတ်သောအခါ ပိုမိုထင်ရှားသော ခေါင်းလောင်းသံ
//                 မြည်စေရန် သတ်မှတ်ထားပါသည်။
//               </li>
//             </ul>
//           </div>

//           {/* ရည်ရွယ်ချက် ၃: မျက်နှာပြင် မပိတ်စေရန် ထိန်းချုပ်ခြင်း */}
//           <div className="p-4 border-l-4 border-blue-500 backdrop-blur-3xl rounded-lg shadow-2xl">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               ၃. မျက်နှာပြင် မပိတ်စေရန် ထိန်းချုပ်ခြင်း (Screen Wake Lock)
//             </h3>
//             <p className="text-gray-700">
//               တရားထိုင်ချိန် စတင်နေစဉ်အတွင်း ဖုန်း သို့မဟုတ် ကွန်ပျူတာ၏
//               မျက်နှာပြင်သည် အလိုအလျောက်ပိတ်သွားခြင်း မဖြစ်စေရန် **Wake Lock
//               API** ကို အသုံးပြု၍ တားဆီးပေးထားပါသည်။
//             </p>
//           </div>

//           {/* ရည်ရွယ်ချက် ၄: ချွင်းချက်များ စီမံခန့်ခွဲခြင်း */}
//           <div className="p-4 border-l-4 border-red-500 backdrop-blur-3xl rounded-lg shadow-2xl">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               ၄. ချွင်းချက်များ စီမံခန့်ခွဲခြင်း (Handling Missed Events)
//             </h3>
//             <p className="text-gray-700">
//               ဖုန်း Sleep Mode သို့ ရောက်သွားခြင်း သို့မဟုတ် Tab
//               ပြောင်းသွားခြင်း ဖြစ်ခဲ့ပါက၊ ပြန်လည် နိုးထလာသောအခါ လွဲချော်သွားသော
//               ခေါင်းလောင်းသံများနှင့် အချိန်အတိအကျကို ပြန်လည် တွက်ချက်၍
//               ပြင်ဆင်ပေးပါသည်။
//             </p>
//           </div>
//         </div>

//         <hr className="my-8 border-indigo-200" />

//         {/* အသုံးပြုပုံ */}
//         <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
//           <FaLaptopHouse className="mr-3 text-green-500" />✨ အသုံးပြုပုံ
//           အဆင့်ဆင့်
//         </h2>
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="flex-1 p-5 backdrop-blur-3xl rounded-lg shadow-2xl border border-indigo-200 text-center ">
//             <FaPlay className="text-4xl text-green-600 mx-auto mb-3" />
//             <h3 className="text-xl font-bold mb-2">စတင်ရန်</h3>
//             <p className="text-white">
//               လိုအပ်သော မိနစ်အရေအတွက်ကို ထည့်သွင်းပြီး မိနစ် ၃၀ သို့မဟုတ် ၁
//               နာရီကို ရွေးချယ်၍
//               <span className="font-bold text-green-400"> "စတင်မည်"</span>{" "}
//               ခလုတ်ကို နှိပ်ပါ။
//             </p>
//           </div>
//           <div className="flex-1 p-5 backdrop-blur-3xl rounded-lg shadow-2xl border border-indigo-200 text-center">
//             <FaStop className="text-4xl text-red-600 mx-auto mb-3" />
//             <h3 className="text-xl font-bold mb-2 lg:text-gray-700">ရပ်ရန်</h3>
//             <p className="xl:text-gray-700 text-white">
//               အချိန်ရေတွက်မှုကို ရပ်ဆိုင်းလိုပါက{" "}
//               <span className="font-bold xl:text-red-700 text-red-500">
//                 {" "}
//                 "ရပ်မည်"
//               </span>{" "}
//               ခလုတ်ကို နှိပ်ခြင်းဖြင့် ရပ်ဆိုင်းနိုင်ပါသည်။
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Purpose;
