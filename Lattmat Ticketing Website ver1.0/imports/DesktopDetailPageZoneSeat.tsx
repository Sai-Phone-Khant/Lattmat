import svgPaths from "./svg-c6vzdnbnon";
import imgLattmat2 from "figma:asset/368080d9df66133b0a78eb531bbeff0043586346.png";
import imgRectangle70 from "figma:asset/e14317c8df1911bbf9731f28d5054841ba42d550.png";
import imgFloorPlan from "figma:asset/b4f7510077295e920b803b10200a84fba436f7d4.png";
import imgFloorPlan1 from "figma:asset/eae313a48883a46e7a2a60ee806e73a8052191be.png";
import imgFloorPlan2 from "figma:asset/2e99086b095ca7cbe92593d0cfcb8eb99814df15.png";
import imgFloorPlan3 from "figma:asset/2824de8b32f9a571dfaf6d46a1a9f7681cc8bd47.png";
import imgFloorPlan4 from "figma:asset/97294dee0ce033ab88d20986d4756e7800ee195f.png";
import imgFloorPlan5 from "figma:asset/da98676d10ff7bcea750c145400133269eeb489d.png";
import imgFloorPlan6 from "figma:asset/43107dc5c8241658ac3912bba0ea6c1e466c3e48.png";
import imgRectangle88 from "figma:asset/674f7549f9e3c7ab54e25c11e880d2766c64c7e8.png";
import imgDesktopDetailPageZoneSeat from "figma:asset/88809adc334a5f5d0b33d765ab4ca0c768ca53cd.png";

function ProfileCircle() {
  return (
    <div
      className="absolute left-0 size-[33.786px] top-0"
      data-name="profile-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 34 34"
      >
        <g id="profile-circle">
          <path
            d={svgPaths.p3e5c1d80}
            fill="var(--fill-0, #292D32)"
            id="Vector"
          />
          <path
            d={svgPaths.p31898400}
            fill="var(--fill-0, #292D32)"
            id="Vector_2"
          />
          <g id="Vector_3" opacity="0"></g>
          <path
            d={svgPaths.p324b7400}
            fill="var(--fill-0, #292D32)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function VuesaxOutlineProfileCircle() {
  return (
    <div
      className="absolute contents left-0 top-0"
      data-name="vuesax/outline/profile-circle"
    >
      <ProfileCircle />
    </div>
  );
}

function VuesaxOutlineProfileCircle1() {
  return (
    <div
      className="[grid-area:1_/_1] ml-[91.143px] mt-[10.804px] relative size-[33.786px]"
      data-name="vuesax/outline/profile-circle"
    >
      <VuesaxOutlineProfileCircle />
    </div>
  );
}

function Button() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Button"
    >
      <div className="[grid-area:1_/_1] bg-[#ffffff] h-[55px] ml-0 mt-0 relative rounded-[5px] w-[136.714px]">
        <div className="absolute border border-[#333333] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      </div>
      <VuesaxOutlineProfileCircle1 />
      <div
        className="[grid-area:1_/_1] flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[39.286px] justify-center ml-0 mt-[29.464px] relative text-[#333333] text-[20px] text-left translate-y-[-50%] w-[68.357px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">Daniel</p>
      </div>
    </div>
  );
}

function Notification() {
  return (
    <div
      className="absolute left-0 size-[33.79px] top-0"
      data-name="notification"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 34 34"
      >
        <g id="notification">
          <path
            d={svgPaths.p26671800}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p2e1c00}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p153edd00}
            fill="var(--fill-0, white)"
            id="Vector_3"
          />
          <g id="Vector_4" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxOutlineNotification() {
  return (
    <div
      className="absolute contents left-0 top-0"
      data-name="vuesax/outline/notification"
    >
      <Notification />
    </div>
  );
}

function VuesaxOutlineNotification1() {
  return (
    <div
      className="relative shrink-0 size-[33.79px]"
      data-name="vuesax/outline/notification"
    >
      <VuesaxOutlineNotification />
    </div>
  );
}

function ChevronDown() {
  return (
    <div
      className="h-[19px] relative shrink-0 w-[22.476px]"
      data-name="chevron-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 23 19"
      >
        <g id="chevron-down">
          <path
            d={svgPaths.p3a42ac80}
            fill="var(--fill-0, white)"
            id="Vector"
            stroke="var(--stroke-0, white)"
          />
        </g>
      </svg>
    </div>
  );
}

function English() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"
      data-name="English"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">EN</p>
      </div>
      <ChevronDown />
    </div>
  );
}

function LanguageDefault() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[35px] items-start justify-start left-0 px-0.5 py-1.5 top-0 w-[75px]"
      data-name="Language/Default"
    >
      <English />
    </div>
  );
}

function Language() {
  return (
    <div className="h-[35px] relative shrink-0 w-[75px]" data-name="Language">
      <LanguageDefault />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-row gap-10 items-center justify-start p-0 relative shrink-0">
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0715c9] text-[20px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Home</p>
      </div>
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Support</p>
      </div>
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Your Ticket</p>
      </div>
      <Button />
      <VuesaxOutlineNotification1 />
      <Language />
    </div>
  );
}

function Header() {
  return (
    <div
      className="relative shadow-[0px_1px_4px_0px_rgba(51,51,51,0.3)] shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-[200px] py-0 relative w-full">
          <div
            className="[background-size:112.46%_244.33%] bg-[36.59%_47.11%] bg-no-repeat h-[100.055px] shrink-0 w-[218px]"
            data-name="Lattmat 2"
            style={{ backgroundImage: `url('${imgLattmat2}')` }}
          />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Warp() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 shrink-0 sticky top-0 w-[1920px]"
      data-name="warp"
    >
      <Header />
    </div>
  );
}

function Banner() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-center p-0 relative shrink-0"
      data-name="banner"
    >
      <div
        className="[background-size:100%_166.67%] bg-[0%_19.63%] bg-no-repeat h-[513px] rounded-[5px] shrink-0 w-[1520px]"
        style={{ backgroundImage: `url('${imgRectangle70}')` }}
      />
    </div>
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="text"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-gray-600 text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          Water Zonic Myanmar is the ultimate water festival experience. Get
          ready to dance the night away to the hottest EDM beats under the
          stars. With an amazing lineup of DJs, water cannons, and other
          surprises, Water Zonic is guaranteed to be a night to remember.
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="text"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-gray-600 text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">
              Tickets are available online and at select retailers.
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">
              Limited VIP packages are available, which include access to a
              private area with a dedicated bar and restrooms.
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">
              The venue is located at: The One Entertainment Park, 19th Mile,
              Yangon-Mandalay Expressway, Yangon.
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">
              Parking is available on-site.
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">
              Public transportation is also available.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="text"
    >
      <div
        className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-gray-600 text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">Bring illegal substances.</span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">Drink and drive.</span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">Litter.</span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">Fight or cause trouble.</span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">Leave valuables unattended.</span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">
              Take photos or videos of others without their permission.
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[20px]">
              Be rude or disrespectful to other attendees.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Component12Viber() {
  return (
    <div
      className="absolute bottom-[9.792%] left-[22.841%] right-[64.371%] top-[9.777%]"
      data-name="12.viber"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 29 29"
      >
        <g id="12.viber">
          <path
            d={svgPaths.p16fb3c40}
            fill="var(--fill-0, #6D479B)"
            id="background"
          />
          <g id="icon">
            <path
              d={svgPaths.p242889f0}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p1495f80}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p2b7f3d00}
              fill="var(--fill-0, white)"
              id="Vector_3"
            />
            <path
              d={svgPaths.p41f1d00}
              fill="var(--fill-0, white)"
              id="Vector_4"
            />
            <path
              d={svgPaths.p8b7b480}
              fill="var(--fill-0, white)"
              id="Vector_5"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Layer2() {
  return (
    <div
      className="absolute bottom-[9.792%] contents left-[22.841%] right-[64.371%] top-[9.777%]"
      data-name="Layer 2"
    >
      <Component12Viber />
    </div>
  );
}

function Component03Instagram() {
  return (
    <div
      className="absolute bottom-[9.778%] left-[43.682%] right-[43.605%] top-[10.259%]"
      data-name="03.Instagram"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="03.Instagram">
          <path
            d={svgPaths.p362c0d00}
            fill="url(#paint0_linear_10_9425)"
            id="Background"
          />
          <path
            d={svgPaths.p3c01d900}
            fill="var(--fill-0, white)"
            id="Shade"
            opacity="0.1"
          />
          <g id="Icon">
            <path
              d={svgPaths.p2b6c3300}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p2124250a}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p17a28b80}
              fill="var(--fill-0, white)"
              id="Vector_3"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_10_9425"
            x1="4.02947"
            x2="23.8177"
            y1="-3.10237"
            y2="16.6859"
          >
            <stop stopColor="#F9E000" />
            <stop offset="0.15" stopColor="#FCB61D" />
            <stop offset="0.3" stopColor="#F37853" />
            <stop offset="0.5" stopColor="#ED2875" />
            <stop offset="1" stopColor="#654A9D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Circle() {
  return (
    <div
      className="absolute bottom-[9.778%] contents left-[43.682%] right-[43.605%] top-[10.259%]"
      data-name="Circle"
    >
      <Component03Instagram />
    </div>
  );
}

function Layer3() {
  return (
    <div
      className="absolute bottom-[9.778%] contents left-[43.682%] right-[43.605%] top-[10.259%]"
      data-name="Layer 2"
    >
      <Circle />
    </div>
  );
}

function Component02YouTube() {
  return (
    <div
      className="absolute bottom-[9.792%] left-[64.371%] right-[22.841%] top-[9.777%]"
      data-name="02.YouTube"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 29 29"
      >
        <g id="02.YouTube">
          <path
            d={svgPaths.p16fb3c40}
            fill="var(--fill-0, #FF0000)"
            id="Background"
          />
          <path d={svgPaths.p454b700} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Color() {
  return (
    <div
      className="absolute bottom-[9.792%] contents left-[64.371%] right-[22.841%] top-[9.777%]"
      data-name="Color"
    >
      <Component02YouTube />
    </div>
  );
}

function Layer4() {
  return (
    <div
      className="absolute bottom-[9.792%] contents left-[64.371%] right-[22.841%] top-[9.777%]"
      data-name="Layer 2"
    >
      <Color />
    </div>
  );
}

function Layer1() {
  return (
    <div
      className="h-[34.978px] overflow-clip relative shrink-0 w-[220px]"
      data-name="Layer_1"
    >
      <div className="absolute inset-0" data-name="Vector">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 220 35"
        >
          <path
            d={svgPaths.p31481e80}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[10.274%] left-[2.078%] right-[85.134%] top-[9.703%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 29 28"
        >
          <path
            d={svgPaths.p350a2100}
            fill="var(--fill-0, #4272B7)"
            id="Vector"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-[9.863%] left-[5.85%] right-[88.681%] top-[25.443%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 13 23"
        >
          <path
            d={svgPaths.p1bdf8580}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </svg>
      </div>
      <Layer2 />
      <Layer3 />
      <Layer4 />
    </div>
  );
}

function Tags() {
  return (
    <div
      className="bg-[#abb0ee] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[5px] shrink-0"
      data-name="tags"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">EDM Festival</p>
      </div>
    </div>
  );
}

function Tags1() {
  return (
    <div
      className="bg-[#abb0ee] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[5px] shrink-0"
      data-name="tags"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">Waterzonic</p>
      </div>
    </div>
  );
}

function Tags2() {
  return (
    <div
      className="bg-[#abb0ee] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[5px] shrink-0"
      data-name="tags"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">Newyear</p>
      </div>
    </div>
  );
}

function Tags3() {
  return (
    <div
      className="bg-[#abb0ee] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative rounded-[5px] shrink-0"
      data-name="tags"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[18px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">2023</p>
      </div>
    </div>
  );
}

function Frame1886() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Tags />
      <Tags1 />
      <Tags2 />
      <Tags3 />
    </div>
  );
}

function Information() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0 w-full"
      data-name="information"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#333333] text-[24px] text-left"
        style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Event Description</p>
      </div>
      <Text />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#333333] text-[24px] text-left"
        style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Additional Information</p>
      </div>
      <Text1 />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#333333] text-[24px] text-left"
        style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Notice of Awareness</p>
      </div>
      <Text2 />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#333333] text-[24px] text-left"
        style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Follow Us on Social Media</p>
      </div>
      <Layer1 />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#333333] text-[24px] text-left"
        style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Tags</p>
      </div>
      <Frame1886 />
    </div>
  );
}

function Information1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[5px] shrink-0 w-full"
      data-name="Information"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[20px] relative w-full">
          <Information />
        </div>
      </div>
    </div>
  );
}

function FloorPlan() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[5px] shrink-0 size-[200px]"
      data-name="floor plan"
      style={{
        backgroundImage: `url('${imgFloorPlan}'), url('${imgFloorPlan1}')`,
      }}
    />
  );
}

function FloorPlan1() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[5px] shrink-0 size-[200px]"
      data-name="floor plan"
      style={{
        backgroundImage: `url('${imgFloorPlan2}'), url('${imgFloorPlan1}')`,
      }}
    />
  );
}

function FloorPlan2() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[5px] shrink-0 size-[200px]"
      data-name="floor plan"
      style={{
        backgroundImage: `url('${imgFloorPlan3}'), url('${imgFloorPlan1}')`,
      }}
    />
  );
}

function FloorPlan3() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[5px] shrink-0 size-[200px]"
      data-name="floor plan"
      style={{
        backgroundImage: `url('${imgFloorPlan4}'), url('${imgFloorPlan1}')`,
      }}
    />
  );
}

function FloorPlan4() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[5px] shrink-0 size-[200px]"
      data-name="floor plan"
      style={{
        backgroundImage: `url('${imgFloorPlan5}'), url('${imgFloorPlan1}')`,
      }}
    />
  );
}

function FloorPlan5() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[5px] shrink-0 size-[200px]"
      data-name="floor plan"
      style={{
        backgroundImage: `url('${imgFloorPlan6}'), url('${imgFloorPlan1}')`,
      }}
    />
  );
}

function Frame1887() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-[1101px]">
      <FloorPlan />
      <FloorPlan1 />
      <FloorPlan2 />
      <FloorPlan3 />
      <FloorPlan4 />
      <FloorPlan5 />
    </div>
  );
}

function Wap() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow h-[897px] items-start justify-start min-h-px min-w-px overflow-x-clip overflow-y-auto p-0 relative shrink-0"
      data-name="wap"
    >
      <Information1 />
      <Frame1887 />
    </div>
  );
}

function Warp1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1.5 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="warp"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[24px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">Event Venue</p>
      </div>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="h-[19px] relative w-[20.337px]" data-name="chevron-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 19"
      >
        <g id="chevron-down">
          <path
            d={svgPaths.p20651f00}
            fill="var(--fill-0, #333333)"
            id="Vector"
            stroke="var(--stroke-0, #333333)"
          />
        </g>
      </svg>
    </div>
  );
}

function Ga() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-[355px]"
      data-name="GA"
    >
      <Warp1 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function EventVenue() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Event Venue"
    >
      <Ga />
      <div
        className="bg-center bg-contain bg-no-repeat h-[214.333px] shrink-0 w-full"
        style={{ backgroundImage: `url('${imgRectangle88}')` }}
      />
    </div>
  );
}

function Warp2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1.5 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="warp"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[24px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">Location</p>
      </div>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="h-[19px] relative w-[20.337px]" data-name="chevron-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 19"
      >
        <g id="chevron-down">
          <path
            d={svgPaths.p20651f00}
            fill="var(--fill-0, #333333)"
            id="Vector"
            stroke="var(--stroke-0, #333333)"
          />
        </g>
      </svg>
    </div>
  );
}

function Ga1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-[355px]"
      data-name="GA"
    >
      <Warp2 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ChevronDown2 />
        </div>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-[115px]" data-name="Date">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[10px] relative w-[115px]">
        <div
          className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[16px] text-left text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[20px] whitespace-pre">Yangon</p>
        </div>
      </div>
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Date1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-[5px] shrink-0"
      data-name="Date"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center p-[10px] relative w-full">
          <div
            className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[16px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[20px] whitespace-pre">Mandalay</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Date2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-[5px] shrink-0"
      data-name="Date"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center p-[10px] relative w-full">
          <div
            className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[16px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[20px] whitespace-pre">Taunggyi</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DateTime() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-[5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Date & Time"
    >
      <Date />
      <Date1 />
      <Date2 />
    </div>
  );
}

function DateTime1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Date & Time"
    >
      <Ga1 />
      <DateTime />
    </div>
  );
}

function Warp3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1.5 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="warp"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[24px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">{`Dae & Time`}</p>
      </div>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="h-[19px] relative w-[20.337px]" data-name="chevron-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 19"
      >
        <g id="chevron-down">
          <path
            d={svgPaths.p20651f00}
            fill="var(--fill-0, #333333)"
            id="Vector"
            stroke="var(--stroke-0, #333333)"
          />
        </g>
      </svg>
    </div>
  );
}

function Ga2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-[355px]"
      data-name="GA"
    >
      <Warp3 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ChevronDown3 />
        </div>
      </div>
    </div>
  );
}

function Date3() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-[115px]" data-name="Date">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[10px] relative w-[115px]">
        <div
          className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[16px] text-left text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[20px] whitespace-pre">2024.01.02</p>
        </div>
      </div>
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Date4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-[5px] shrink-0"
      data-name="Date"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center p-[10px] relative w-full">
          <div
            className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[16px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[20px] whitespace-pre">2024.01.03</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Date5() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-[5px] shrink-0"
      data-name="Date"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center p-[10px] relative w-full">
          <div
            className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[16px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[20px] whitespace-pre">2024.01.04</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DateTime2() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-[5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Date & Time"
    >
      <Date3 />
      <Date4 />
      <Date5 />
    </div>
  );
}

function Date6() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-[115px]" data-name="Date">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[10px] relative w-[115px]">
        <div
          className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[16px] text-left text-nowrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="block leading-[20px] whitespace-pre">2024.01.05</p>
        </div>
      </div>
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function DateTime3() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-[5px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Date & Time"
    >
      <Date6 />
    </div>
  );
}

function DateTime4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Date & Time"
    >
      <Ga2 />
      <DateTime2 />
      <DateTime3 />
    </div>
  );
}

function Price() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="price"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[18px] text-gray-600 text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">50,000 Ks</p>
      </div>
    </div>
  );
}

function Warp4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1.5 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="warp"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[24px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">GA</p>
      </div>
      <Price />
    </div>
  );
}

function ChevronDown4() {
  return (
    <div
      className="h-[19px] relative shrink-0 w-[20.337px]"
      data-name="chevron-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 19"
      >
        <g id="chevron-down">
          <path
            d={svgPaths.p20651f00}
            fill="var(--fill-0, #333333)"
            id="Vector"
            stroke="var(--stroke-0, #333333)"
          />
        </g>
      </svg>
    </div>
  );
}

function Ga3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-[355px]"
      data-name="GA"
    >
      <Warp4 />
      <ChevronDown4 />
    </div>
  );
}

function TicketTiers() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Ticket Tiers"
    >
      <Ga3 />
    </div>
  );
}

function Price1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="price"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[18px] text-gray-600 text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">100,000 Ks</p>
      </div>
    </div>
  );
}

function Warp5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1.5 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="warp"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#333333] text-[24px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">VIP</p>
      </div>
      <Price1 />
    </div>
  );
}

function ChevronDown5() {
  return (
    <div
      className="h-[19px] relative shrink-0 w-[20.337px]"
      data-name="chevron-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 21 19"
      >
        <g id="chevron-down">
          <path
            d={svgPaths.p20651f00}
            fill="var(--fill-0, #333333)"
            id="Vector"
            stroke="var(--stroke-0, #333333)"
          />
        </g>
      </svg>
    </div>
  );
}

function Ga4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-[355px]"
      data-name="GA"
    >
      <Warp5 />
      <ChevronDown5 />
    </div>
  );
}

function TicketTiers1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Ticket Tiers"
    >
      <Ga4 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#0715c9] h-16 relative rounded-[5px] shrink-0 w-full"
      data-name="button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-16 items-center justify-center p-[20px] relative w-full">
          <div
            className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[30px] whitespace-pre">Buy Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Btn() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-5 items-start justify-start overflow-clip p-[20px] relative rounded-[5px] shrink-0 w-[395px]"
      data-name="Btn"
    >
      <EventVenue />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 355 1"
          >
            <line
              id="Line 3"
              stroke="var(--stroke-0, #4B5563)"
              x2="355"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <DateTime1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 355 1"
          >
            <line
              id="Line 3"
              stroke="var(--stroke-0, #4B5563)"
              x2="355"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <DateTime4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 355 1"
          >
            <line
              id="Line 3"
              stroke="var(--stroke-0, #4B5563)"
              x2="355"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <TicketTiers />
      <TicketTiers1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 355 1"
          >
            <line
              id="Line 3"
              stroke="var(--stroke-0, #4B5563)"
              x2="355"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Button1 />
    </div>
  );
}

function Text3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-start justify-start overflow-clip p-0 shrink-0 sticky top-0 w-full"
      data-name="text"
    >
      <Wap />
      <Btn />
    </div>
  );
}

function Body() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[60px] h-[1199px] items-start justify-start px-[200px] py-0 relative shrink-0 w-[1920px]"
      data-name="body"
    >
      <Banner />
      <Text3 />
    </div>
  );
}

function CopyRight() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 overflow-clip px-[200px] py-6 top-0 w-[1920px]"
      data-name="copy right"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff] text-[18px] text-center"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Copyright@2022 by Lattmat</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[72px] relative shrink-0 w-[1920px]" data-name="footer">
      <CopyRight />
    </div>
  );
}

export default function DesktopDetailPageZoneSeat() {
  return (
    <div
      className="[background-size:auto,_cover] bg-[position:0%_0%,_50%_50%] box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative size-full"
      data-name="Desktop / Detail Page/ zone + seat"
      style={{
        backgroundImage: `linear-gradient(90deg, rgb(241, 243, 245) 0%, rgb(241, 243, 245) 100%), url('${imgDesktopDetailPageZoneSeat}')`,
      }}
    >
      <Warp />
      <Body />
      <Footer />
    </div>
  );
}