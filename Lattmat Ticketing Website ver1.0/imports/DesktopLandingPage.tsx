import svgPaths from "./svg-qh3cew5z9u";
import imgLattmat2 from "figma:asset/368080d9df66133b0a78eb531bbeff0043586346.png";
import imgCatagoryCard from "figma:asset/cee1847381bcc008e5910634da99333d0562922b.png";
import imgCatagoryCard1 from "figma:asset/309420355b5126f61827cae2f00e86e5057dc0ae.png";
import imgCatagoryCard2 from "figma:asset/5244419de45cbcc9beb1adfd22bc424c90fd0a4f.png";
import imgCatagoryCard3 from "figma:asset/4f12483687e7d0815bb60136206eea7a301970e9.png";
import imgCatagoryCard4 from "figma:asset/36acd31ff2faf111e1630c235ec24a6a10529b4a.png";
import imgCatagoryCard5 from "figma:asset/46e44093eaa927ebdb65ff686215dd8a50a8f918.png";
import imgRectangle14 from "figma:asset/f931f71ecbf711fd1e1d2b5518203abec2c8d1c6.png";
import imgRectangle15 from "figma:asset/88f73bf21d0019741ceb787965f23ec5daeea1ea.png";
import imgRectangle from "figma:asset/403624d1b9df68e7788053566cbc7ff02eede899.png";
import imgImage from "figma:asset/b275ad65d645a4be46439e947862e660171f49f6.png";
import imgImage1 from "figma:asset/c7688dbe5a8ee7fadd727a0892b42452d4f36993.png";
import imgImage2 from "figma:asset/d6259ef8f8b119cfb3542147a49bb84449bbde17.png";
import imgImage3 from "figma:asset/a437f1477cedd0062c6b73aa98ccbb57be630e5b.png";
import imgImage4 from "figma:asset/da424d6317189edad8f97b5368afccd5add4d990.png";
import imgImage5 from "figma:asset/ad8a8abb483d6ca55519e68114e8c283f8d65603.png";
import imgRectangle1 from "figma:asset/14a7f018041b2d4568e476772614d3a334a9ada3.png";
import imgImage6 from "figma:asset/0438e89d6a6022c3744187fcaad87c9ce1dab439.png";
import imgImage7 from "figma:asset/e8c55185f26ace9495fac857a82963eedbbbbb34.png";
import imgImage8 from "figma:asset/e70e1e065fc57c3915206e322dcb55d7dc191142.png";
import imgImage9 from "figma:asset/ce8e8b9aac402a6b49ec725d065680aaf8e8ed71.png";
import imgImage10 from "figma:asset/ead164663d52d36691f5b4ee19c4b6971e04a015.png";
import imgEllipse7 from "figma:asset/b60921083fff6d9898de82421a2965283ad1f888.png";
import imgEllipse8 from "figma:asset/0f2437e0ab0378fa84cc4a60586c86930ffbf4e4.png";
import imgEllipse9 from "figma:asset/63df5e2dcc8241a66aa75e82958ec7c0213179cb.png";
import imgImage11 from "figma:asset/863efadd11ffe10c1011e1f4beb8efed76883030.png";
import imgImage12 from "figma:asset/6e2d122ca20a2f052c8d39c2358f8c202a88fc4f.png";

function Frame66() {
  return (
    <div className="[grid-area:1_/_1] bg-[#0715c9] box-border content-stretch flex flex-row gap-2.5 items-center justify-center ml-0 mt-0 p-[16px] relative rounded-[5px]">
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">
          Sign Up
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Button"
    >
      <Frame66 />
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
        <p className="block leading-[normal] whitespace-pre">
          EN
        </p>
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
    <div
      className="h-[35px] relative shrink-0 w-[75px]"
      data-name="Language"
    >
      <LanguageDefault />
    </div>
  );
}

function Warp() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-10 items-center justify-start p-0 relative shrink-0"
      data-name="warp"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0715c9] text-[20px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">
          Home
        </p>
      </div>
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[20px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">
          Support
        </p>
      </div>
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#333333] text-[20px] text-center text-nowrap"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal] whitespace-pre">
          Your Ticket
        </p>
      </div>
      <Button />
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
          <Warp />
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div
      className="absolute bottom-[15.385%] left-[9.524%] right-[13.602%] top-[9.524%]"
      data-name="search"
    >
      <div className="absolute bottom-[-5.945%] left-0 right-[-5.811%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 46 45"
        >
          <g id="search">
            <path
              d={svgPaths.p33dfa800}
              fill="var(--fill-0, #B8B0B0)"
              id="Vector"
            />
            <path
              d={svgPaths.p2e832c1c}
              id="Vector_2"
              stroke="var(--stroke-0, #B8B0B0)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Search1() {
  return (
    <div
      className="h-14 overflow-clip relative shrink-0 w-[55.963px]"
      data-name="search"
    >
      <Search />
    </div>
  );
}

function SearchBar() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[18px] h-20 items-center justify-start p-0 relative shrink-0"
      data-name="search bar"
    >
      <Search1 />
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[50px] justify-center leading-[0] relative shrink-0 text-[#333333] text-[24px] text-left w-[634.417px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">cccc</p>
      </div>
    </div>
  );
}

function ChevronDown1() {
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

function Location() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-20 items-center justify-between left-0 px-6 py-0 top-0 w-[267.206px]"
      data-name="location"
    >
      <div className="absolute border-[#333333] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[50px] justify-center leading-[0] relative shrink-0 text-[#333333] text-[24px] text-left w-[150px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre-wrap">{`  Location`}</p>
      </div>
      <ChevronDown1 />
    </div>
  );
}

function Location1() {
  return (
    <div
      className="h-20 relative shrink-0 w-[267.206px]"
      data-name="Location"
    >
      <Location />
    </div>
  );
}

function ChevronDown2() {
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

function Location2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-20 items-center justify-between left-0 px-6 py-0 top-0 w-[267.206px]"
      data-name="location"
    >
      <div className="absolute border-[#333333] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[50px] justify-center leading-[0] relative shrink-0 text-[#333333] text-[24px] text-left w-[150px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Date</p>
      </div>
      <ChevronDown2 />
    </div>
  );
}

function Genes() {
  return (
    <div
      className="h-20 relative shrink-0 w-[267.413px]"
      data-name="Genes"
    >
      <Location2 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#0715c9] box-border content-stretch flex flex-row gap-2.5 h-[78px] items-center justify-start p-0 relative rounded-[15px] shrink-0 w-[267px]">
      <div className="absolute border-4 border-[#ffffff] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div
        className="basis-0 flex flex-col font-['Roboto:Bold',_sans-serif] font-bold grow h-[50px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff] text-[24px] text-center"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Search</p>
      </div>
    </div>
  );
}

function Frame1879() {
  return (
    <div className="box-border content-stretch flex flex-row h-full items-center justify-end p-0 relative shrink-0">
      <Location1 />
      <Genes />
      <Frame69 />
    </div>
  );
}

function SearchBarComponent() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-between pl-2.5 pr-0 py-0 relative rounded-[15px] shrink-0 w-[1520px]"
      data-name="Search bar component"
    >
      <div className="absolute border border-[#333333] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <SearchBar />
      <div className="flex flex-row items-center self-stretch">
        <Frame1879 />
      </div>
    </div>
  );
}

function SearchBar1() {
  return (
    <div
      className="bg-[#0715c9] box-border content-stretch flex flex-col gap-2.5 h-[250px] items-center justify-center p-0 relative shrink-0 w-[1930px]"
      data-name="search bar"
    >
      <SearchBarComponent />
    </div>
  );
}

function CatagoryCard() {
  return (
    <div
      className="[background-size:auto,_cover,_auto] bg-[#ffffff] bg-[position:0%_0%,_50%_50%,_0%_0%] box-border content-stretch flex flex-row gap-2.5 h-[158px] items-center justify-center p-0 relative rounded-[15px] shrink-0"
      data-name="catagory card"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('${imgCatagoryCard}')`,
      }}
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[71.724px] justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[36px] text-center w-[233.354px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[42px]">Concerts</p>
      </div>
    </div>
  );
}

function CatagoryCard1() {
  return (
    <div
      className="[background-size:auto,_cover,_cover,_cover,_cover,_cover,_auto] bg-[#ffffff] bg-[position:0%_0%,_50%_50%,_50%_50%,_50%_50%,_50%_50%,_50%_50%,_0%_0%] box-border content-stretch flex flex-row gap-2.5 h-[158px] items-center justify-center p-0 relative rounded-[15px] shrink-0"
      data-name="catagory card"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('${imgCatagoryCard1}'), url('${imgCatagoryCard2}'), url('${imgCatagoryCard3}'), url('${imgCatagoryCard4}'), url('${imgCatagoryCard}')`,
      }}
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[71.724px] justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[36px] text-center w-[233.354px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[42px]">Night</p>
      </div>
    </div>
  );
}

function CatagoryCard2() {
  return (
    <div
      className="[background-size:auto,_cover,_cover,_cover,_cover,_cover,_cover,_auto] bg-[#ffffff] bg-[position:0%_0%,_50%_50%,_50%_50%,_50%_50%,_50%_50%,_50%_50%,_50%_50%,_0%_0%] box-border content-stretch flex flex-row gap-2.5 h-[158px] items-center justify-center p-0 relative rounded-[15px] shrink-0"
      data-name="catagory card"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('${imgCatagoryCard5}'), url('${imgCatagoryCard1}'), url('${imgCatagoryCard2}'), url('${imgCatagoryCard3}'), url('${imgCatagoryCard4}'), url('${imgCatagoryCard}')`,
      }}
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[71.724px] justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[36px] text-center w-[233.354px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[42px]">Restaurants</p>
      </div>
    </div>
  );
}

function CatagoryCard3() {
  return (
    <div
      className="[background-size:auto,_cover,_cover,_auto] bg-[#ffffff] bg-[position:0%_0%,_50%_50%,_50%_50%,_0%_0%] box-border content-stretch flex flex-row gap-2.5 h-[158px] items-center justify-center p-0 relative rounded-[15px] shrink-0"
      data-name="catagory card"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('${imgCatagoryCard4}'), url('${imgCatagoryCard}')`,
      }}
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[71.724px] justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[36px] text-center w-[233.354px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[42px]">Arts</p>
      </div>
    </div>
  );
}

function CatagoryCard4() {
  return (
    <div
      className="[background-size:auto,_cover,_cover,_cover,_auto] bg-[#ffffff] bg-[position:0%_0%,_50%_50%,_50%_50%,_50%_50%,_0%_0%] box-border content-stretch flex flex-row gap-2.5 h-[158px] items-center justify-center p-0 relative rounded-[15px] shrink-0"
      data-name="catagory card"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('${imgCatagoryCard3}'), url('${imgCatagoryCard4}'), url('${imgCatagoryCard}')`,
      }}
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[71.724px] justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[36px] text-center w-[233.354px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[42px]">Sports</p>
      </div>
    </div>
  );
}

function CatagoryCard5() {
  return (
    <div
      className="[background-size:auto,_cover,_cover,_cover,_cover,_auto] bg-[#ffffff] bg-[position:0%_0%,_50%_50%,_50%_50%,_50%_50%,_50%_50%,_0%_0%] box-border content-stretch flex flex-row gap-2.5 h-[158px] items-center justify-center p-0 relative rounded-[15px] shrink-0"
      data-name="catagory card"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('${imgCatagoryCard2}'), url('${imgCatagoryCard3}'), url('${imgCatagoryCard4}'), url('${imgCatagoryCard}')`,
      }}
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[71.724px] justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[36px] text-center w-[233.354px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[42px]">Funs</p>
      </div>
    </div>
  );
}

function Catagory() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-[158px] items-start justify-between p-0 relative shrink-0 w-full"
      data-name="Catagory"
    >
      <CatagoryCard />
      <CatagoryCard1 />
      <CatagoryCard2 />
      <CatagoryCard3 />
      <CatagoryCard4 />
      <CatagoryCard5 />
    </div>
  );
}

function Warp1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[30px] items-center justify-center p-0 relative shrink-0 w-full"
      data-name="warp"
    >
      <Catagory />
    </div>
  );
}

function Group12Variant3() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Group 12/Variant3"
    >
      <div
        className="[background-size:100%_173.81%,_112.53%_231.22%] absolute bg-[0%_36.39%,_50.64%_26.84%] bg-no-repeat inset-0 rounded-[15px]"
        style={{
          backgroundImage: `url('${imgRectangle14}'), url('${imgRectangle15}')`,
        }}
      />
      <div className="absolute bottom-[2.588%] left-[47.632%] right-[51.118%] top-[92.706%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 19 18"
        >
          <ellipse
            cx="9.5"
            cy="8.94118"
            fill="var(--fill-0, white)"
            id="Ellipse 4"
            rx="9.5"
            ry="8.94118"
          />
        </svg>
      </div>
      <div className="absolute bottom-[2.588%] left-[49.408%] right-[49.342%] top-[92.706%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 19 18"
        >
          <ellipse
            cx="9.5"
            cy="8.94118"
            fill="var(--fill-0, white)"
            id="Ellipse 4"
            rx="9.5"
            ry="8.94118"
          />
        </svg>
      </div>
      <div className="absolute bottom-[2.588%] left-[51.184%] right-[47.566%] top-[92.706%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 19 18"
        >
          <ellipse
            cx="9.5"
            cy="8.94118"
            fill="var(--fill-0, #333333)"
            id="Ellipse 6"
            rx="9.5"
            ry="8.94118"
          />
        </svg>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[172px] h-[380px] items-start justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="banner"
    >
      <Group12Variant3 />
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0"
      data-name="Title"
    >
      <div
        className="[background-size:100%_166.67%] bg-[0%_36.96%] bg-no-repeat h-[69px] shrink-0 w-[115px]"
        data-name="Rectangle"
        style={{ backgroundImage: `url('${imgRectangle}')` }}
      />
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-20 justify-center leading-[0] relative shrink-0 text-[#333333] text-[36px] text-center w-60"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[42px]">Trending Now</p>
      </div>
      <div
        className="[background-size:100%_166.67%] bg-[0%_36.96%] bg-no-repeat h-[69px] shrink-0 w-[115px]"
        data-name="Rectangle"
        style={{ backgroundImage: `url('${imgRectangle}')` }}
      />
    </div>
  );
}

function CheckDetails() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{ backgroundImage: `url('${imgImage}')` }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails />
    </div>
  );
}

function DateTimePlace() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Feb 7, 2023</p>
        <p className="block">YGN, Myanmar</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Novotel Hotel</p>
        <p className="block">15:00 PM</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[0px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[normal]">
          <span
            className="text-[22px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            To Sir, With Love 1
          </span>
          <span
            className="css-qhqfql text-[#333333] text-[14.19px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            st
          </span>
          <span
            className="text-[22px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >{` Fan Meeting`}</span>
        </p>
      </div>
      <DateTimePlace />
    </div>
  );
}

function Card() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <Image />
      <Content />
    </div>
  );
}

function CheckDetails1() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{
        backgroundImage: `url('${imgImage1}'), url('${imgImage}')`,
      }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails1 />
    </div>
  );
}

function DateTimePlace1() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Apr 4, 2023</p>
        <p className="block">BKK, Thailand</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Asiaworld Arena</p>
        <p className="block">18:00 PM</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Black Pink - Born Pink World Tour Hong Kong
        </p>
      </div>
      <DateTimePlace1 />
    </div>
  );
}

function Card1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <Image1 />
      <Content1 />
    </div>
  );
}

function CheckDetails2() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{
        backgroundImage: `url('${imgImage2}'), url('${imgImage1}'), url('${imgImage}')`,
      }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails2 />
    </div>
  );
}

function DateTimePlace2() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">June 1, 2023</p>
        <p className="block">YGN, Myanmar</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">National Museum</p>
        <p className="block">15:00 PM</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Art Modern Exhibition
        </p>
      </div>
      <DateTimePlace2 />
    </div>
  );
}

function Card2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <Image2 />
      <Content2 />
    </div>
  );
}

function CheckDetails3() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{
        backgroundImage: `url('${imgImage3}'), url('${imgImage2}'), url('${imgImage1}'), url('${imgImage}')`,
      }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails3 />
    </div>
  );
}

function DateTimePlace3() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Oct 25, 2023</p>
        <p className="block">YGN, Myanmar</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">YGN Bustro</p>
        <p className="block">22:00 - 24:00 AM</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Halloween Scariest
        </p>
      </div>
      <DateTimePlace3 />
    </div>
  );
}

function Card3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <Image3 />
      <Content3 />
    </div>
  );
}

function CheckDetails4() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{
        backgroundImage: `url('${imgImage4}'), url('${imgImage3}'), url('${imgImage2}'), url('${imgImage1}'), url('${imgImage}')`,
      }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails4 />
    </div>
  );
}

function DateTimePlace4() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="mb-0">
          NOv 1
          <span className="css-eoz90d text-[10.32px]">st</span>,
          2023
        </p>
        <p className="block">BKK, Thailand</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">BKK Inter Stadium</p>
        <p className="block">18:00 PM</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Talyor Swift - Reputation Tour
        </p>
      </div>
      <DateTimePlace4 />
    </div>
  );
}

function Card4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <Image4 />
      <Content4 />
    </div>
  );
}

function CheckDetails5() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{
        backgroundImage: `url('${imgImage5}'), url('${imgImage2}'), url('${imgImage1}'), url('${imgImage}')`,
      }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails5 />
    </div>
  );
}

function DateTimePlace5() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">May 25, 2023</p>
        <p className="block">YGN, Myanmar</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Aveo Bar</p>
        <p className="block">21:00 - 4:00 AM</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">{`Aveo Beat - Unstoppable Party `}</p>
      </div>
      <DateTimePlace5 />
    </div>
  );
}

function Card5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <Image5 />
      <Content5 />
    </div>
  );
}

function Cards() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-start justify-start pb-[3px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Cards"
    >
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function TrendingNow() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[30px] items-center justify-center overflow-clip p-0 relative shrink-0 w-full"
      data-name="trending now"
    >
      <Title />
      <Cards />
    </div>
  );
}

function Title1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0"
      data-name="Title"
    >
      <div
        className="[background-size:100.85%_127.91%] bg-[50%_65.55%] bg-no-repeat h-[82px] shrink-0 w-[104px]"
        data-name="Rectangle"
        style={{ backgroundImage: `url('${imgRectangle1}')` }}
      />
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[80.68px] justify-center leading-[0] relative shrink-0 text-[#333333] text-[36px] text-center w-60"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[42px]">Early Access</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="[background-size:100.85%_127.91%] bg-[50%_74.29%] bg-no-repeat h-[82px] w-[104px]"
            data-name="Rectangle"
            style={{
              backgroundImage: `url('${imgRectangle1}')`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function CheckDetails6() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image6() {
  return (
    <div
      className="[background-size:100%_183.03%,_cover] bg-[0%_19.23%,_50%_50%] bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{
        backgroundImage: `url('${imgImage6}'), url('${imgImage}')`,
      }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails6 />
    </div>
  );
}

function DateTimePlace6() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Feb 7, 2023</p>
        <p className="block">YGN, Myanmar</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Bar De Seoul</p>
        <p className="block">18:00 - 21:00 PM</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Night Club Party
        </p>
      </div>
      <DateTimePlace6 />
    </div>
  );
}

function Tag() {
  return (
    <div
      className="absolute bg-[#ed1c24] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[206.501px] px-[15px] py-0 rounded-bl-[15px] rounded-tl-[15px] top-[-10.672px]"
      data-name="tag"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">
          Early Access
        </p>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <div className="absolute h-[13.143px] left-[339.001px] top-[19.328px] w-[36.5px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 37 14"
        >
          <path
            d={svgPaths.p1329ee00}
            fill="var(--fill-0, #ED1C24)"
            id="Vector 1"
          />
        </svg>
      </div>
      <Image6 />
      <Content6 />
      <Tag />
    </div>
  );
}

function CheckDetails7() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image7() {
  return (
    <div
      className="[background-size:100%_182.93%,_cover,_cover] bg-[0%_0.68%,_50%_50%,_50%_50%] bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{
        backgroundImage: `url('${imgImage7}'), url('${imgImage1}'), url('${imgImage}')`,
      }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails7 />
    </div>
  );
}

function DateTimePlace7() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Apr 4, 2023</p>
        <p className="block">BKK, Thailand</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Wonderland</p>
        <p className="block">9:00 AM</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Wonderland - Happy Island
        </p>
      </div>
      <DateTimePlace7 />
    </div>
  );
}

function Tag1() {
  return (
    <div
      className="absolute bg-[#ed1c24] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[206.501px] px-[15px] py-0 rounded-bl-[15px] rounded-tl-[15px] top-[-10.672px]"
      data-name="tag"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">
          Early Access
        </p>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <div className="absolute h-[13.143px] left-[339.001px] top-[19.328px] w-[36.5px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 37 14"
        >
          <path
            d={svgPaths.p1329ee00}
            fill="var(--fill-0, #ED1C24)"
            id="Vector 1"
          />
        </svg>
      </div>
      <Image7 />
      <Content7 />
      <Tag1 />
    </div>
  );
}

function CheckDetails8() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image8() {
  return (
    <div
      className="[background-size:100%_195.93%,_cover,_cover,_cover] bg-[0%_-0.22%,_50%_50%,_50%_50%,_50%_50%] bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{
        backgroundImage: `url('${imgImage8}'), url('${imgImage2}'), url('${imgImage1}'), url('${imgImage}')`,
      }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails8 />
    </div>
  );
}

function DateTimePlace8() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">June 1, 2023</p>
        <p className="block">YGN, Myanmar</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">My Gardern Restaurant</p>
        <p className="block">11:00 - 15:00 PM</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Food For Brain - Bryan
        </p>
      </div>
      <DateTimePlace8 />
    </div>
  );
}

function Tag2() {
  return (
    <div
      className="absolute bg-[#ed1c24] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[206.501px] px-[15px] py-0 rounded-bl-[15px] rounded-tl-[15px] top-[-10.672px]"
      data-name="tag"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">
          Early Access
        </p>
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <div className="absolute h-[13.143px] left-[339.001px] top-[19.328px] w-[36.5px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 37 14"
        >
          <path
            d={svgPaths.p1329ee00}
            fill="var(--fill-0, #ED1C24)"
            id="Vector 1"
          />
        </svg>
      </div>
      <Image8 />
      <Content8 />
      <Tag2 />
    </div>
  );
}

function CheckDetails9() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image9() {
  return (
    <div
      className="[background-size:100%_185.59%,_cover,_cover,_cover,_cover] bg-[0%_0.56%,_50%_50%,_50%_50%,_50%_50%,_50%_50%] bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{
        backgroundImage: `url('${imgImage9}'), url('${imgImage3}'), url('${imgImage2}'), url('${imgImage1}'), url('${imgImage}')`,
      }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails9 />
    </div>
  );
}

function DateTimePlace9() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Apr 09, 2023</p>
        <p className="block">YGN, Myanmar</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Ngwe Saung Beach</p>
        <p className="block">16:00 - 21:00 PM</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Pearths Largest Beach Festival
        </p>
      </div>
      <DateTimePlace9 />
    </div>
  );
}

function Tag3() {
  return (
    <div
      className="absolute bg-[#ed1c24] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[206.501px] px-[15px] py-0 rounded-bl-[15px] rounded-tl-[15px] top-[-10.672px]"
      data-name="tag"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">
          Early Access
        </p>
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <div className="absolute h-[13.143px] left-[339.001px] top-[19.328px] w-[36.5px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 37 14"
        >
          <path
            d={svgPaths.p1329ee00}
            fill="var(--fill-0, #ED1C24)"
            id="Vector 1"
          />
        </svg>
      </div>
      <Image9 />
      <Content9 />
      <Tag3 />
    </div>
  );
}

function CheckDetails10() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image10() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{
        backgroundImage: `url('${imgImage10}'), url('${imgImage4}'), url('${imgImage3}'), url('${imgImage2}'), url('${imgImage1}'), url('${imgImage}')`,
      }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails10 />
    </div>
  );
}

function DateTimePlace10() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">Oct 25, 2023</p>
        <p className="block">YGN, Myanmar</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">National Museum</p>
        <p className="block">210:00 AM</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          National Race Arts
        </p>
      </div>
      <DateTimePlace10 />
    </div>
  );
}

function Tag4() {
  return (
    <div
      className="absolute bg-[#ed1c24] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[206.501px] px-[15px] py-0 rounded-bl-[15px] rounded-tl-[15px] top-[-10.672px]"
      data-name="tag"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">
          Early Access
        </p>
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <div className="absolute h-[13.143px] left-[339.001px] top-[19.328px] w-[36.5px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 37 14"
        >
          <path
            d={svgPaths.p1329ee00}
            fill="var(--fill-0, #ED1C24)"
            id="Vector 1"
          />
        </svg>
      </div>
      <Image10 />
      <Content10 />
      <Tag4 />
    </div>
  );
}

function CheckDetails11() {
  return (
    <div
      className="absolute bg-[rgba(50,58,202,0.8)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-0 px-[132px] py-4 top-[279.876px] w-[362px]"
      data-name="check details"
    >
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[20px] whitespace-pre">
          Check Details
        </p>
      </div>
    </div>
  );
}

function Image11() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat h-[279.876px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-[362.001px]"
      data-name="image"
      style={{
        backgroundImage: `url('${imgImage4}'), url('${imgImage5}'), url('${imgImage2}'), url('${imgImage1}'), url('${imgImage}')`,
      }}
    >
      <div className="absolute border-[#979090] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <CheckDetails11 />
    </div>
  );
}

function DateTimePlace11() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Roboto:Regular',_sans-serif] font-normal items-start justify-between leading-[0] p-0 relative shrink-0 text-[#333333] text-[16px] w-[334px]"
      data-name="date,time, place"
    >
      <div
        className="h-[50.139px] leading-[20px] relative shrink-0 text-left w-[152px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="mb-0">
          NOv 1
          <span className="css-eoz90d text-[10.32px]">st</span>,
          2023
        </p>
        <p className="block">BKK, Thailand</p>
      </div>
      <div
        className="h-[50px] leading-[20px] relative shrink-0 text-right w-[170px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block mb-0">BKK Inter Stadium</p>
        <p className="block">18:00 PM</p>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[132.139px] items-start justify-between p-[12px] relative rounded-bl-[15px] rounded-br-[15px] shrink-0 w-[362px]"
      data-name="content"
    >
      <div className="absolute border-[#979090] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[15px] rounded-br-[15px]" />
      <div
        className="font-['Roboto:Bold',_sans-serif] font-bold h-[46px] leading-[0] relative shrink-0 text-[#333333] text-[20px] text-left w-[332.653px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Talyor Swift - Reputation Tour
        </p>
      </div>
      <DateTimePlace11 />
    </div>
  );
}

function Tag5() {
  return (
    <div
      className="absolute bg-[#ed1c24] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-[206.501px] px-[15px] py-0 rounded-bl-[15px] rounded-tl-[15px] top-[-10.672px]"
      data-name="tag"
    >
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[24px] text-nowrap text-right"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px] whitespace-pre">
          Early Access
        </p>
      </div>
    </div>
  );
}

function Card11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Card"
    >
      <div className="absolute h-[13.143px] left-[339.001px] top-[19.328px] w-[36.5px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 37 14"
        >
          <path
            d={svgPaths.p1329ee00}
            fill="var(--fill-0, #ED1C24)"
            id="Vector 1"
          />
        </svg>
      </div>
      <Image11 />
      <Content11 />
      <Tag5 />
    </div>
  );
}

function Cards1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-start justify-start pb-[3px] pt-0 px-0 relative shrink-0 w-full"
      data-name="Cards"
    >
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
      <Card10 />
      <Card11 />
    </div>
  );
}

function EarlyAccess() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[30px] items-center justify-center overflow-clip p-0 relative shrink-0 w-full"
      data-name="Early Access"
    >
      <Title1 />
      <Cards1 />
    </div>
  );
}

function Timer() {
  return (
    <div
      className="absolute left-0 size-[70px] top-0"
      data-name="timer"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 70 70"
      >
        <g id="timer">
          <path
            d={svgPaths.p2e52af00}
            fill="var(--fill-0, #0715C9)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxOutlineTimer() {
  return (
    <div
      className="absolute contents left-0 top-0"
      data-name="vuesax/outline/timer"
    >
      <Timer />
    </div>
  );
}

function VuesaxOutlineTimer1() {
  return (
    <div
      className="relative shrink-0 size-[70px]"
      data-name="vuesax/outline/timer"
    >
      <VuesaxOutlineTimer />
    </div>
  );
}

function SaveTime() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[412px] items-center justify-between px-[19px] py-9 relative rounded-[15px] shrink-0 w-[362px]"
      data-name="save time"
    >
      <div className="absolute border border-[#979090] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <VuesaxOutlineTimer1 />
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[63.763px] justify-center leading-[0] relative shrink-0 text-[#0715c9] text-[24px] text-center w-[276.283px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">{`Save time & money`}</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#333333] text-[20px] text-center w-[312.357px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Don’t need to panic to get your favorite concert’s
          ticket. We can help you what you want
        </p>
      </div>
    </div>
  );
}

function TicketExpired() {
  return (
    <div
      className="absolute left-0 size-[70px] top-0"
      data-name="ticket-expired"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 70 70"
      >
        <g id="ticket-expired">
          <path
            d={svgPaths.p1fe44500}
            fill="var(--fill-0, #0715C9)"
            id="Vector"
          />
          <path
            d={svgPaths.p1ab2ff00}
            fill="var(--fill-0, #0715C9)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p178caf00}
            fill="var(--fill-0, #0715C9)"
            id="Vector_3"
          />
          <g id="Vector_4" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxOutlineTicketExpired() {
  return (
    <div
      className="absolute contents left-0 top-0"
      data-name="vuesax/outline/ticket-expired"
    >
      <TicketExpired />
    </div>
  );
}

function VuesaxOutlineTicketExpired1() {
  return (
    <div
      className="relative shrink-0 size-[70px]"
      data-name="vuesax/outline/ticket-expired"
    >
      <VuesaxOutlineTicketExpired />
    </div>
  );
}

function EasyToBuyTickets() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[412px] items-center justify-between px-[19px] py-9 relative rounded-[15px] shrink-0 w-[362px]"
      data-name="easy to buy tickets"
    >
      <div className="absolute border border-[#979090] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <VuesaxOutlineTicketExpired1 />
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[63.763px] justify-center leading-[0] relative shrink-0 text-[#0715c9] text-[24px] text-center w-[276.283px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">
          Easy to buy tickets
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#333333] text-[20px] text-center w-[312.357px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Don’t need to panic to get your favorite concert’s
          ticket. We can help you what you want
        </p>
      </div>
    </div>
  );
}

function CardPos() {
  return (
    <div
      className="absolute h-[65.333px] left-0 top-0 w-[64.422px]"
      data-name="card-pos"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 65 66"
      >
        <g id="card-pos">
          <path
            d={svgPaths.p3e7adc80}
            fill="var(--fill-0, #0715C9)"
            id="Vector"
          />
          <path
            d={svgPaths.p15c55480}
            fill="var(--fill-0, #0715C9)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p27e7a100}
            fill="var(--fill-0, #0715C9)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3dabca00}
            fill="var(--fill-0, #0715C9)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p3bb49680}
            fill="var(--fill-0, #0715C9)"
            id="Vector_5"
          />
          <g id="Vector_6" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxOutlineCardPos() {
  return (
    <div
      className="absolute contents left-0 top-0"
      data-name="vuesax/outline/card-pos"
    >
      <CardPos />
    </div>
  );
}

function VuesaxOutlineCardPos1() {
  return (
    <div
      className="relative shrink-0 size-[70px]"
      data-name="vuesax/outline/card-pos"
    >
      <VuesaxOutlineCardPos />
    </div>
  );
}

function VarietyOfPayments() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[412px] items-center justify-between px-[19px] py-9 relative rounded-[15px] shrink-0 w-[362px]"
      data-name="variety of payments"
    >
      <div className="absolute border border-[#979090] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <VuesaxOutlineCardPos1 />
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[63.763px] justify-center leading-[0] relative shrink-0 text-[#0715c9] text-[24px] text-center w-[276.283px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">
          Variety Of Payments
        </p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#333333] text-[20px] text-center w-[312.357px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Don’t need to panic to get your favorite concert’s
          ticket. We can help you what you want
        </p>
      </div>
    </div>
  );
}

function Flash() {
  return (
    <div
      className="absolute left-0 size-[70px] top-0"
      data-name="flash"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 70 70"
      >
        <g id="flash">
          <path
            d={svgPaths.pa0fc000}
            fill="var(--fill-0, #0715C9)"
            id="Vector"
          />
          <path
            d={svgPaths.pa2bec00}
            fill="var(--fill-0, #0715C9)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p72ee100}
            fill="var(--fill-0, #0715C9)"
            id="Vector_3"
          />
          <path
            d={svgPaths.pdb13180}
            fill="var(--fill-0, #0715C9)"
            id="Vector_4"
          />
          <g id="Vector_5" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxOutlineFlash() {
  return (
    <div
      className="absolute contents left-0 top-0"
      data-name="vuesax/outline/flash"
    >
      <Flash />
    </div>
  );
}

function VuesaxOutlineFlash1() {
  return (
    <div
      className="relative shrink-0 size-[70px]"
      data-name="vuesax/outline/flash"
    >
      <VuesaxOutlineFlash />
    </div>
  );
}

function AnytimeAnywhere() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[412px] items-center justify-between px-[19px] py-9 relative rounded-[15px] shrink-0 w-[362px]"
      data-name="anytime anywhere"
    >
      <div className="absolute border border-[#979090] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <VuesaxOutlineFlash1 />
      <div
        className="flex flex-col font-['Roboto:Bold',_sans-serif] font-bold h-[63.763px] justify-center leading-[0] relative shrink-0 text-[#0715c9] text-[24px] text-center w-[276.283px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[30px]">Anytime Anywhere</p>
      </div>
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#333333] text-[20px] text-center w-[312.357px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[normal]">
          Don’t need to panic to get your favorite concert’s
          ticket. We can help you what you want
        </p>
      </div>
    </div>
  );
}

function SellingPoint() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full"
      data-name="selling point"
    >
      <SaveTime />
      <EasyToBuyTickets />
      <VarietyOfPayments />
      <AnytimeAnywhere />
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-center justify-center px-[200px] py-0 relative w-full">
          <SearchBar1 />
          <Warp1 />
          <Banner />
          <TrendingNow />
          <EarlyAccess />
          <SellingPoint />
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
        <p className="block leading-[normal]">
          Don’t miss your happiness
        </p>
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
        <p className="block leading-[30px] whitespace-pre">
          Follow us on
        </p>
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
        <p className="block leading-[30px] whitespace-pre">
          Download from
        </p>
      </div>
      <div
        className="bg-center bg-cover bg-no-repeat h-[57px] shrink-0 w-48"
        data-name="image 2"
        style={{ backgroundImage: `url('${imgImage11}')` }}
      />
      <div
        className="bg-center bg-cover bg-no-repeat h-[57px] shrink-0 w-48"
        data-name="image 1"
        style={{ backgroundImage: `url('${imgImage12}')` }}
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
            <p className="block leading-[24px]">
              Copyright@2022 by Lattmat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 w-full">
      <Frame72 />
      <CopyRight />
    </div>
  );
}

function Arrow() {
  return (
    <div
      className="absolute left-0 size-8 top-0"
      data-name="Arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow">
          <path
            d={svgPaths.p20e32300}
            fill="var(--fill-0, #292D32)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="relative size-8" data-name="Arrow">
      <Arrow />
    </div>
  );
}

function Arrow2() {
  return (
    <div
      className="backdrop-blur-[2.5px] backdrop-filter bg-[rgba(250,250,250,0.27)] h-[72.259px] relative rounded-[5px] w-[76.847px]"
      data-name="arrow"
    >
      <div className="absolute flex items-center justify-center left-[22.423px] size-8 top-[20.129px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Arrow1 />
        </div>
      </div>
    </div>
  );
}

function Arrow3() {
  return (
    <div
      className="absolute left-0 size-8 top-0"
      data-name="Arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Arrow">
          <path
            d={svgPaths.p20e32300}
            fill="var(--fill-0, #292D32)"
            id="Vector"
          />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Arrow4() {
  return (
    <div className="relative size-8" data-name="Arrow">
      <Arrow3 />
    </div>
  );
}

function Arrow5() {
  return (
    <div
      className="absolute backdrop-blur-[2.5px] backdrop-filter bg-[rgba(250,250,250,0.27)] h-[72.259px] left-[102.153px] rounded-[5px] top-[1369.21px] w-[76.847px]"
      data-name="arrow"
    >
      <div className="absolute flex items-center justify-center left-[22.423px] size-8 top-[20.129px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Arrow4 />
        </div>
      </div>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute contents left-1/2 top-[1369.21px] translate-x-[-50%]">
      <div
        className="absolute flex h-[72.259px] items-center justify-center top-[1369.21px] w-[76.847px]"
        style={{ left: "calc(100% - 179px)" }}
      >
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Arrow2 />
        </div>
      </div>
      <Arrow5 />
    </div>
  );
}

export default function DesktopLandingPage() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-center p-0 relative size-full"
      data-name="Desktop/Landing Page"
    >
      <Header />
      <Body />
      <Frame74 />
      <Group89 />
    </div>
  );
}