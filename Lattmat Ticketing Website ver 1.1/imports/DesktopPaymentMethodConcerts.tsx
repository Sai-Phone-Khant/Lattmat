import svgPaths from "./svg-hq2fg1k0il";
import imgLattmat2 from "figma:asset/368080d9df66133b0a78eb531bbeff0043586346.png";
import imgEllipse7 from "figma:asset/b60921083fff6d9898de82421a2965283ad1f888.png";
import imgEllipse8 from "figma:asset/0f2437e0ab0378fa84cc4a60586c86930ffbf4e4.png";
import imgEllipse9 from "figma:asset/63df5e2dcc8241a66aa75e82958ec7c0213179cb.png";
import imgImage2 from "figma:asset/863efadd11ffe10c1011e1f4beb8efed76883030.png";
import imgImage1 from "figma:asset/6e2d122ca20a2f052c8d39c2358f8c202a88fc4f.png";

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
            fill="var(--fill-0, #455358)"
            id="Vector"
          />
          <path
            d={svgPaths.p2e1c00}
            fill="var(--fill-0, #455358)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p153edd00}
            fill="var(--fill-0, #455358)"
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
            fill="var(--fill-0, #333333)"
            id="Vector"
            stroke="var(--stroke-0, #333333)"
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
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left text-nowrap"
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
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col h-[35px] items-start justify-start left-0 px-0.5 py-1.5 top-0 w-[75px]"
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
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[20px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">Support</p>
      </div>
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[20px] text-center text-nowrap"
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
      className="bg-[#ffffff] relative shadow-[0px_1px_4px_0px_rgba(51,51,51,0.3)] shrink-0 w-full"
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
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 w-full"
      data-name="warp"
    >
      <Header />
    </div>
  );
}

function Back() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-[79px]"
      data-name="back"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[22.421px]">
            <div className="absolute bottom-[-7.364px] left-0 right-[-4.46%] top-[-7.364px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 16"
              >
                <path
                  d={svgPaths.p1d790ac0}
                  fill="var(--stroke-0, #333333)"
                  id="Arrow 1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[18px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">Back</p>
      </div>
    </div>
  );
}

function Warp1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[120px] items-start justify-center p-0 relative shrink-0 w-full"
      data-name="warp"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[24px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Billing Details</p>
      </div>
      <Back />
    </div>
  );
}

function InputBox() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[5px] shrink-0 w-full"
      data-name="Input box"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[20px] relative w-full">
          <div
            className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#adadad] text-[18px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24px]">enter your name</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Name() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-[525px]"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[18px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px] whitespace-pre">
          Name<span className="text-[#ff0707]">*</span>
        </p>
      </div>
      <InputBox />
    </div>
  );
}

function InputBox1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[5px] shrink-0 w-full"
      data-name="Input box"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[20px] relative w-full">
          <div
            className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#adadad] text-[18px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24px]">enter your mail</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Name1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Name"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[18px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px] whitespace-pre">
          Email<span className="text-[#ff0707]">*</span>
        </p>
      </div>
      <InputBox1 />
    </div>
  );
}

function InputBox2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[5px] shrink-0 w-full"
      data-name="Input box"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[20px] relative w-full">
          <div
            className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[18px] text-left text-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24px] whitespace-pre">+ 95</p>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div
              className="flex h-full items-center justify-center relative shrink-0"
              style={
                {
                  "--transform-inner-width": "24",
                  "--transform-inner-height": "24",
                  width:
                    "calc(1px * ((var(--transform-inner-height) * 0.9999999403953552) + (var(--transform-inner-width) * 0.00024288665736094117)))",
                } as React.CSSProperties
              }
            >
              <div className="flex-none h-full rotate-[89.986deg]">
                <div className="h-full relative w-6">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 1"
                    >
                      <line
                        id="Line 2"
                        stroke="var(--stroke-0, #333333)"
                        x2="24"
                        y1="0.5"
                        y2="0.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#adadad] text-[18px] text-left"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24px]">enter your phone number</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function PhoneNumber() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start p-0 relative shrink-0 w-[525px]"
      data-name="Phone Number"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[18px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[24px] whitespace-pre">
          Phone Number<span className="text-[#ff0707]">*</span>
        </p>
      </div>
      <InputBox2 />
    </div>
  );
}

function InputBox3() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[5px] shrink-0 w-full"
      data-name="Input box"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row font-['Roboto:Bold',_sans-serif] font-bold items-center justify-between leading-[0] p-[20px] relative text-[18px] text-left text-nowrap w-full">
          <div
            className="flex flex-col justify-center relative shrink-0 text-[#333333]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24px] text-nowrap whitespace-pre">
              E-ticket
            </p>
          </div>
          <div
            className="flex flex-col justify-center relative shrink-0 text-[#0715c9]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24px] text-nowrap whitespace-pre">
              Change
            </p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function PhoneNumber1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[5px] items-start justify-start p-0 relative shrink-0 w-[525px]"
      data-name="Phone Number"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[18px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px] whitespace-pre">Delivery Option</p>
      </div>
      <InputBox3 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full">
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#0715c9] text-[18px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Important</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#333333] text-[16px] w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px]">
          The customer information won’t be changed after purchasing the ticket.
          And can’t be sold to others.
        </p>
      </div>
    </div>
  );
}

function Warp2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-5 items-start justify-start p-[20px] relative rounded-[5px] shadow-[0px_1px_4px_0px_rgba(51,51,51,0.3)] shrink-0"
      data-name="warp"
    >
      <Name />
      <Name1 />
      <PhoneNumber />
      <PhoneNumber1 />
      <Frame62 />
    </div>
  );
}

function Warp3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0"
      data-name="warp"
    >
      <Warp1 />
      <Warp2 />
    </div>
  );
}

function Header1() {
  return (
    <div
      className="bg-[#0715c9] box-border content-stretch flex flex-row gap-2.5 h-16 items-center justify-center p-0 relative rounded-tl-[5px] rounded-tr-[5px] shrink-0 w-[565px]"
      data-name="header"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">
          Your Ticket Detail
        </p>
      </div>
    </div>
  );
}

function Warp4() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Bold',_sans-serif] font-bold gap-[53px] items-end justify-start leading-[0] p-0 relative shrink-0 text-[#333333] text-[24px] w-full"
      data-name="warp"
    >
      <div
        className="basis-0 flex flex-col grow h-[50px] justify-center min-h-px min-w-px relative shrink-0 text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Zone</p>
      </div>
      <div
        className="basis-0 flex flex-col grow h-[50px] justify-center min-h-px min-w-px relative shrink-0 text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Seat</p>
      </div>
    </div>
  );
}

function Warp5() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Medium',_sans-serif] font-medium gap-[53px] items-center justify-center leading-[0] p-0 relative shrink-0 text-[#455358] text-[18px] w-full"
      data-name="warp"
    >
      <div
        className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">VIP</p>
      </div>
      <div
        className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">001</p>
      </div>
    </div>
  );
}

function Warp6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[53px] items-center justify-center leading-[0] p-0 relative shrink-0 text-[18px] w-full"
      data-name="warp"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center min-h-px min-w-px relative shrink-0 text-[#333333] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Event Date</p>
      </div>
      <div
        className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center min-h-px min-w-px relative shrink-0 text-[#455358] text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">2024.01.02( Monday)</p>
      </div>
    </div>
  );
}

function Warp7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[53px] items-center justify-center leading-[0] p-0 relative shrink-0 text-[18px] w-full"
      data-name="warp"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center min-h-px min-w-px relative shrink-0 text-[#333333] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Event Place</p>
      </div>
      <div
        className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center min-h-px min-w-px relative shrink-0 text-[#455358] text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Thuwanabumi</p>
      </div>
    </div>
  );
}

function Warp8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[53px] items-center justify-center leading-[0] p-0 relative shrink-0 text-[18px] w-full"
      data-name="warp"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center min-h-px min-w-px relative shrink-0 text-[#333333] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Event City</p>
      </div>
      <div
        className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center min-h-px min-w-px relative shrink-0 text-[#455358] text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Yangon</p>
      </div>
    </div>
  );
}

function Warp9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[53px] items-center justify-center leading-[0] p-0 relative shrink-0 text-[18px] w-full"
      data-name="warp"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center min-h-px min-w-px relative shrink-0 text-[#333333] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">No. of tickets</p>
      </div>
      <div
        className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center min-h-px min-w-px relative shrink-0 text-[#455358] text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Warp10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[53px] items-center justify-center leading-[0] p-0 relative shrink-0 text-[18px] w-full"
      data-name="warp"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center min-h-px min-w-px relative shrink-0 text-[#333333] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Subtotal</p>
      </div>
      <div
        className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center min-h-px min-w-px relative shrink-0 text-[#455358] text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Ks 100,000</p>
      </div>
    </div>
  );
}

function Warp11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[53px] items-center justify-center leading-[0] p-0 relative shrink-0 text-[18px] w-full"
      data-name="warp"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center min-h-px min-w-px relative shrink-0 text-[#333333] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Service Charges ( 10 % )</p>
      </div>
      <div
        className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center min-h-px min-w-px relative shrink-0 text-[#455358] text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Ks 10,000</p>
      </div>
    </div>
  );
}

function Warp12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[53px] items-center justify-center leading-[0] p-0 relative shrink-0 text-[18px] w-full"
      data-name="warp"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center min-h-px min-w-px relative shrink-0 text-[#333333] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Tax ( 5 % )</p>
      </div>
      <div
        className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center min-h-px min-w-px relative shrink-0 text-[#455358] text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Ks 5,000</p>
      </div>
    </div>
  );
}

function Warp13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[53px] items-center justify-center leading-[0] p-0 relative shrink-0 text-[24px] w-full"
      data-name="warp"
    >
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center min-h-px min-w-px relative shrink-0 text-[#333333] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Total</p>
      </div>
      <div
        className="basis-0 flex flex-col font-['Roboto:Medium',_sans-serif] font-medium grow justify-center min-h-px min-w-px relative shrink-0 text-[#0715c9] text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Ks 115,000</p>
      </div>
    </div>
  );
}

function Warp14() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="warp"
    >
      <Warp10 />
      <Warp11 />
      <Warp12 />
      <Warp13 />
    </div>
  );
}

function Body() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-5 items-start justify-start px-[30px] py-5 relative rounded-bl-[5px] rounded-br-[5px] shrink-0 w-[565px]"
      data-name="body"
    >
      <Warp4 />
      <Warp5 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 505 1"
          >
            <line
              id="Line 4"
              stroke="var(--stroke-0, #D9D9D9)"
              x2="505"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Warp6 />
      <Warp7 />
      <Warp8 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 505 1"
          >
            <line
              id="Line 4"
              stroke="var(--stroke-0, #D9D9D9)"
              x2="505"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Warp9 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 505 1"
          >
            <line
              id="Line 4"
              stroke="var(--stroke-0, #D9D9D9)"
              x2="505"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Warp14 />
    </div>
  );
}

function Card() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="card"
    >
      <Header1 />
      <Body />
    </div>
  );
}

function CheckboxRadio1() {
  return (
    <div
      className="relative rounded-[23px] shrink-0 size-6"
      data-name="Checkbox & Radio"
    >
      <div className="absolute border border-[#0715c9] border-solid inset-0 pointer-events-none rounded-[23px]" />
    </div>
  );
}

function Warp17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="warp"
    >
      <CheckboxRadio1 />
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[18px] text-left"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Bank Transfer</p>
      </div>
    </div>
  );
}

function Warp18() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="warp"
    >
      <Warp17 />
    </div>
  );
}

function Body1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-5 items-start justify-start px-[30px] py-5 relative rounded-[5px] shrink-0 w-[565px]"
      data-name="body"
    >
      <Warp18 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <div className="absolute border-2 border-[#999999] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TermCondition() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-[565px]"
      data-name="Term & Condition"
    >
      <Checkbox />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[0px] text-left w-[507.993px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px] text-[16px]">
          <span
            style={{ fontVariationSettings: "'wdth' 100" }}
          >{`I have read and accept the `}</span>
          <span
            className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] text-[#0715c9]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Terms and Conditions.
          </span>
        </p>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Checkbox">
      <div className="absolute border-2 border-[#999999] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TermCondition1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-[565px]"
      data-name="Term & Condition"
    >
      <Checkbox1 />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[0px] text-left w-[507.993px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[20px] text-[16px]">
          <span
            style={{ fontVariationSettings: "'wdth' 100" }}
          >{`I have read and accept the `}</span>
          <span
            className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] text-[#0715c9]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            refund Policy.
          </span>
        </p>
      </div>
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
            <p className="block leading-[30px] whitespace-pre">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Warp19() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shadow-[0px_1px_4px_0px_rgba(51,51,51,0.3)] shrink-0"
      data-name="warp"
    >
      <Card />
      <Body1 />
      <TermCondition />
      <TermCondition1 />
      <Button1 />
    </div>
  );
}

function Body2() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[120px] items-start justify-center px-[200px] py-0 relative w-full">
          <Warp3 />
          <Warp19 />
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <div
        className="[background-size:112.46%_384.86%] bg-[36.59%_45.83%] bg-no-repeat h-[58.703px] shrink-0 w-full"
        data-name="Lattmat 1"
        style={{ backgroundImage: `url('${imgLattmat2}')` }}
      />
      <div
        className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[17.1461px] text-left w-[218px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">Don’t miss your happiness</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Roboto:Bold',_sans-serif] font-bold gap-6 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-[24px] text-left"
      data-name="Contact"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 w-[169px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Contact Us</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 w-[293px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">+959 999 999 999</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 w-[293px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">+959 666 666 666</p>
      </div>
    </div>
  );
}

function ContactUs() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-between p-0 relative self-stretch shrink-0"
      data-name="contact us"
    >
      <Frame75 />
      <Contact />
    </div>
  );
}

function QuickLinks() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Roboto:Bold',_sans-serif] font-bold gap-6 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-left"
      data-name="Quick links"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 text-[24px] w-[249px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Quick Links</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[18px] w-[97px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Home</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[18px] w-[147px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Concerts</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[18px] w-[68px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Arts</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[18px] w-[107px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Sports</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[18px] w-[79px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Funs</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 text-[18px] w-[106px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[24px]">Nights</p>
      </div>
    </div>
  );
}

function Shortcuts() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Roboto:Bold',_sans-serif] font-bold gap-[27px] items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-[24px] text-left"
      data-name="shortcuts"
    >
      <div
        className="flex flex-col justify-center relative shrink-0 w-36"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Others</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 w-[129px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Support</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 w-[299px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">{`Term & Conditions`}</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 w-[255px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Privacy Policies</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 w-[84px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">FAQs</p>
      </div>
      <div
        className="flex flex-col justify-center relative shrink-0 w-[126px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Careers</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-end justify-start p-0 relative shrink-0 w-full">
      <div className="relative shrink-0 size-[50px]">
        <img
          className="block max-w-none size-full"
          height="50"
          loading="lazy"
          src={imgEllipse7}
          width="50"
        />
      </div>
      <div className="relative shrink-0 size-[50px]">
        <img
          className="block max-w-none size-full"
          height="50"
          loading="lazy"
          src={imgEllipse8}
          width="50"
        />
      </div>
      <div className="relative shrink-0 size-[50px]">
        <img
          className="block max-w-none size-full"
          height="50"
          loading="lazy"
          src={imgEllipse9}
          width="50"
        />
      </div>
    </div>
  );
}

function FollowUs() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-end p-0 relative shrink-0 w-[270px]"
      data-name="follow us"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">Follow us on</p>
      </div>
      <Frame73 />
    </div>
  );
}

function DownloadFrom() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0"
      data-name="download from"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-left text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">Download from</p>
      </div>
      <div
        className="bg-center bg-cover bg-no-repeat h-[57px] shrink-0 w-48"
        data-name="image 2"
        style={{ backgroundImage: `url('${imgImage2}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[57px] shrink-0 w-48"
        data-name="image 1"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
    </div>
  );
}

function Frame71() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0">
      <FollowUs />
      <DownloadFrom />
    </div>
  );
}

function FooterInfo() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"
      data-name="footer info"
    >
      <ContactUs />
      <QuickLinks />
      <Shortcuts />
      <Frame71 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#141952] relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-[200px] py-[30px] relative w-full">
          <FooterInfo />
        </div>
      </div>
    </div>
  );
}

function CopyRight() {
  return (
    <div
      className="bg-[#090d39] relative shrink-0 w-full"
      data-name="copy right"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[200px] py-6 relative w-full">
          <div
            className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff] text-[18px] text-center"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="block leading-[24px]">Copyright@2022 by Lattmat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 w-full"
      data-name="footer"
    >
      <Frame72 />
      <CopyRight />
    </div>
  );
}

export default function DesktopPaymentMethodConcerts() {
  return (
    <div
      className="bg-[#f1f3f5] box-border content-stretch flex flex-col gap-[60px] items-center justify-center p-0 relative size-full"
      data-name="Desktop/Payment Method ( Concerts )"
    >
      <Warp />
      <Body2 />
      <Footer />
    </div>
  );
}