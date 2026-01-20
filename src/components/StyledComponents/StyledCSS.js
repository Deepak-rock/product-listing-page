import styled from 'styled-components';

export const NavbarCom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const SmallDeviceNav = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LargeDeviceNav = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  display: none;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const NavTopSec = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LogoImg = styled.img`
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`
export const LogoText = styled.p`
  font-weight: 800;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 1px;
  vertical-align: middle;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`
export const LogoRightSec = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`
export const NavIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
export const LangaugeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`
export const LangaugeText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 1px;
  vertical-align: middle;
`
export const DownArrow = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`
export const NavbottomSec = styled.div`
  padding: 30px 0 0 0;
  width: 100%;
  max-width: 500px;
`
export const Navlist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
`
export const NavItem = styled.li`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
`
export const MenuAndLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`
export const HamburgerMenu = styled.img`
  width: 20px;
  height: 20px;
`
export const Horizontal = styled.hr`
  width: 100%;
  border: 1px solid #F1F1F1;
`
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const Responsiveness = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }
`
export const ProductPageDes = styled.div`
  padding: 50px 20px;
  width: 100%;
  max-width: 340px;
  display:flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
`
export const Heading = styled.h1`
  padding: 0 0 20px 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 1px;
  vertical-align: middle;
  @media screen and (min-width: 768px) {
    font-size: 60px;
  }
`
export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;            
  text-align: center;
  letter-spacing: 1px;
  vertical-align: middle;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const ProductCountHideFilter = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 20px 0;
    align-self: flex-start;
    display: flex;
    align-items: center;
  }
`
export const ItemCount = styled.p`
  width: 20%;
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 40px;
  letter-spacing: 0px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const FilterHideCont = styled.button`
  width: 20%;
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer
`
export const FilterHide = styled.p`
  color: #888792;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: right;
  text-decoration: underline;
  text-decoration-style: solid;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const LeftArrow = styled.img`
  width: 16px;
  height: 16px;
`
export const RecommendedContBoss = styled.div`
  font-size: 36px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`
export const RecommendedCont = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const Recommended = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 0px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const ProductAndFilterContainer = styled.div`
  align-self: start;
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
`
export const FilterContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    width: 30%;
    display: ${(props) => props.$filterHidden ? 'block' : 'none'};
  }
`
export const CustomizbleCont = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`
export const CustomCheckbox = styled.input`
  width: 22px;
  height: 22px;
  cursor: pointer;
`
export const Menubutton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const Customizble = styled.p`
  font-weight: 700;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
`
export const FilterOptionsContainer = styled.div`

  display: flex;
  flex-direction: column;
  padding: 20px 0;
`
export const FilterDropDown = styled.div`
  padding: 0 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`
export const Filter = styled.p`
  font-weight: 700;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  text-transform: uppercase;
`
export const AllText = styled.p`
  font-weight: 400;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 100%;
`
export const SmallDeviceMenuContainer = styled.div`
  display: ${props => (props.$MenuSm ? 'block' : 'none')};
  align-self: flex-start;
  padding: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const SmallListItem = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`
export const SmallItem = styled.li`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 5px 0;
`
export const FilterAndRecSm = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const FilterConSm = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  border-right: 2px solid #f1f1f1;
`
export const TextSm = styled.button`
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer
`
export const RecAndImgSm = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const ProductList = styled.ul`
  padding: 10px;
  gap: 10px;
  width:calc(100% - ${({ $isFilterHidden }) =>
  $isFilterHidden ? '30%' : '0px'});;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const ProductItem = styled.li`
  position: relative;
  background: #f1f1f1;
  padding: 20px;
  width: calc(50% - 5px);
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  &:hover {
    padding: 10px;
  }
  @media screen and (min-width: 768px){
    width: calc(${({$fullWidth}) => ($fullWidth ? '33.33%' : '25%')} - 10px);
  }
`
export const ProductImageCon = styled.div`
  height: 200px;
  padding: 20px;
`
export const ProductImage = styled.img`
  height: 180px;
  width: 100%;
`
export const ProductDetailsCon = styled.div`
  position: relative;
  padding: 20px 0;
`
export const ProductTitle = styled.h4`
  padding: 100px 0 5px 0;
`
export const ProductPrice = styled.p`
  position: absolute;
  top: 60px;
  left: -25px;
  background: #f71f02;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 500;
`
export const ProuctDes = styled.p`
  color: #737373;
  padding: 5px 0;
`
export const ProductRating = styled.p`
  position: absolute;
  top: 10px;
  left: -25px;
  background: #02f707;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 500;
`
export const ProductReviews = styled.p`
  color: #0289f7;
`

