


import { Routes, Route } from "react-router-dom";
import VC from "../view/FrontDesk/HotelMaster";
import CategoryType from "../view/FrontDesk/Inventory/CategoryType";
import CategoryList from "../view/FrontDesk/Inventory/CategoryList";
import Amenities from "../view/FrontDesk/Inventory/Amenties";
import AllTasks from "../view/FrontDesk/TaskMaster";
import CouponList from "../view/FrontDesk/Coupan/CouponList";
import RatePlan from "../view/FrontDesk/Inventory/RatePlan";
import { Provider } from "react-redux";
import SubCategoryList from "../view/FrontDesk/Inventory/SubCategoryList";
import ViewHotels from "../view/FrontDesk/HotelMaster";
import Signin from "../view/Signin";
import Signup from "../view/Signup";
import AllLaunryRates from "../view/FrontDesk/ExtraService/AllLaundryRates";
import AllLaundryServices from "../view/FrontDesk/ExtraService/AllLaundryServices";
import OtherServices from "../view/FrontDesk/ExtraService/OtherServices";
import CancelReport from "../view/FrontDesk/Reports/CancelReport";
import ReservationReport from "../view/FrontDesk/Reports/ReservationReport";
import ReservationSummary from "../view/FrontDesk/Reports/ReservationSummary";
import AdHocBills from "../view/FrontDesk/ExtraService/AdHocBills";
import MiscellaneousIncome from "../view/FrontDesk/Finance/MiscellanousIncome";
import Expenses from "../view/FrontDesk/Finance/Expense";
import ExpenseCategoryMaster from "../view/FrontDesk/Finance/ExpenseCategoryMaster";
import VendorMaster from "../view/FrontDesk/Finance/VendorMaster";
import DailyReservationSummary from "../view/FrontDesk/Reports/DailyReservationSummary";
import MonthlyReservationSummary from "../view/FrontDesk/Reports/MonthlyReservationSummary";
import AllBookings from "../view/FrontDesk/Reports/AllBookings";
import OccupancyReport from "../view/FrontDesk/Reports/OccupancyReport";
import TravelAgentReport from "../view/FrontDesk/Reports/TravelAgentReport";
import SalesReport from "../view/FrontDesk/Reports/SalesReport";
import UserLoginReport from "../view/FrontDesk/Reports/UserLoginReport";
import Addamenities from "../view/FrontDesk/Inventory/Amenties/Addamenities";
import InvoiceReport from "../view/FrontDesk/Reports/InvoiceReport";
import AddNewCategory from "../view/FrontDesk/Inventory/CategoryList/AddNewCategory";
import AddCategoryType from "../view/FrontDesk/Inventory/CategoryType/AddCategoryType";
import WareHouseMaster from "../view/Inventory/Master/WarehouseMaster";
import GuestFolio from "../view/FrontDesk/Finance/GuestFolio";
import AddSubCategory from "../view/FrontDesk/Inventory/SubCategoryList/AddSubCategory";
import AddNewVendor from "../view/FrontDesk/Finance/VendorMaster/AddNewVendor";
import AddWarehouse from "../view/Inventory/Master/WarehouseMaster/AddWarehouse";
import AddExpensesCategory from "../view/FrontDesk/Finance/ExpenseCategoryMaster/AddExpensesCategory";
import UOMmaster from "../view/Inventory/Master/UOM Master";
import AddUOM from "../view/Inventory/Master/UOM Master/AddUOM";
import FacilityMaster from "../view/FrontDesk/Setting/FacilityMaster";
import NatureOfVisit from "../view/FrontDesk/Setting/NatureOfVisit";
import ProfitCenter from "../view/FrontDesk/Setting/ProfitCenter";
import PaymentSettings from "../view/FrontDesk/Setting/PaymentSetting";
import AddNatureofVisit from "../view/FrontDesk/Setting/NatureOfVisit/AddNatureofVisit";
import AddProfitCenter from "../view/FrontDesk/Setting/ProfitCenter/AddProfitCenter";
import AddFacility from "../view/FrontDesk/Setting/FacilityMaster/AddFacility";
import AddPaymentSettings from "../view/FrontDesk/Setting/PaymentSetting/AddPaymentSettings";
import AllTransaction from "../view/FrontDesk/Finance/AllTransaction";
import AddProduct from "../view/Inventory/Master/ProductMaster/AddProduct";
import BehaviourMaster from "../view/FrontDesk/Setting/BehaviourMaster";
import AddBehaviour from "../view/FrontDesk/Setting/BehaviourMaster/AddBehaviour";
import AddRawMaterial from "../view/Inventory/Master/RawMaterial/AddRawMaterial";
import AddAssetCategory from "../view/Inventory/AssetMaster/AssetCategory/AddAssetCategory";
import CurrencySettings from "../view/FrontDesk/Setting/CurrencySettings";
import UserList from "../view/FrontDesk/User/UserList";
import UserRole from "../view/FrontDesk/User/UserRole";
import AddUser from "../view/FrontDesk/User/AddUser";
import AddDiscount from "../view/FrontDesk/Guest/DiscountRules/AddDiscount";
import AddWaiter from "../view/RestaurantManagement/WaiterMaster/AddWaiter";
import RestLaundryRates from "../view/FrontDesk/ExtraService/AllLaundryRates/RestLaundryRates";
import TableMaster from "../view/RestaurantManagement/TableMaster/TableMaster";
import AddHouseKeeper from "../view/FrontDesk/HouseKeeping/HouseKeepingList/AddHouseKeeper";
import Corporates from "../view/FrontDesk/Guest/Corporates";
import DiscountRules from "../view/FrontDesk/Guest/DiscountRules";
import AddCorporate from "../view/FrontDesk/Guest/Corporates/AddCorporate";
import AddNewAsset from "../view/Inventory/AssetMaster/AssetList/AddNewAsset";
import TaxType from "../view/FrontDesk/TaxPlanSetup/TaxType";
import AddTaxtype from "../view/FrontDesk/TaxPlanSetup/TaxType/AddTaxtype";
import TaxCategory from "../view/FrontDesk/TaxPlanSetup/TaxCategory";
import AddTaxcategory from "../view/FrontDesk/TaxPlanSetup/TaxCategory/AddTaxcategory";
import Signin2 from "../view/Signin/Signin2";
import Signin3 from "../view/Signin/Signin3";
import TaxRule from "../view/FrontDesk/TaxPlanSetup/TaxRules";
import BrokerMaster from "../view/FrontDesk/Setting/BrokerMaster";
import AddBroker from "../view/FrontDesk/Setting/BrokerMaster/AddBroker";
import CompanyMaster from "../view/FrontDesk/Setting/CompanyMaster";
import AddCompany from "../view/FrontDesk/Setting/CompanyMaster/AddCompany";
import RoleandPermission from "../view/FrontDesk/User/RoleandPermission";
import StockSummaryReport from "../view/Inventory/Report/StockSummaryReport";
import SaleList from "../view/RestaurantManagement/SalesList";
import CancelSales from "../view/RestaurantManagement/SalesList/CancelSales";
import PurchaseSummaryReport from "../view/Inventory/Report/PurchaseSummaryReport";
import TransferSummaryReport from "../view/Inventory/Report/TransferSummaryReport";
import InvoiceSetting from "../view/FrontDesk/Setting/InvoiceSettings";
import Dashboard from "../view/FrontDesk/Dashboard";
import ProductMaster from "../view/Inventory/Master/ProductMaster";
import KOTCancel from "../view/RestaurantManagement/KOT Reports/KOTCancel";
import KOTPlaced from "../view/RestaurantManagement/KOT Reports/KOTPlaced";
import AddSeason from "../view/FrontDesk/Inventory/RatePlan/AddSeason";
import AddUserRole from "../view/FrontDesk/User/AddUserRole";
import BookingList from "../view/FrontDesk/Booking/BookingList";
import BokkingRoom from "../view/FrontDesk/Booking/BookingRoom";
import AddCoupan from "../view/FrontDesk/Coupan/AddCoupan";
import RoomCreation from "../view/FrontDesk/Inventory/RoomCreation";
import AddRoom from "../view/FrontDesk/Inventory/RoomCreation/AddRoom";
import AddBed from "../view/FrontDesk/Inventory/RoomCreation/AddBed";
import DormLayout from "../view/FrontDesk/Inventory/RoomCreation/DormLayout";
import ViewBed from "../view/FrontDesk/Inventory/RoomCreation/ViewBed";
import BokkingDorm from "../view/FrontDesk/Booking/BookingDorm";
import ViewRoom from "../view/FrontDesk/Inventory/RoomCreation/ViewRoom";
import AddPermission from "../view/FrontDesk/User/AddPermission";
import SystemSettings from "../view/FrontDesk/Setting/SystemSettings";
import PosSettings from "../view/FrontDesk/Setting/PosSettings";
import HousekeepingStaffList from "../view/FrontDesk/HouseKeeping/HouseKeepingList";
import StaffAssignRoom from "../view/FrontDesk/HouseKeeping/StaffAssignRoom";
import HousekeepingLog from "../view/FrontDesk/HouseKeeping/HousekeepingLog";

import AreCode from "../view/FrontDesk/Setting/AreaCode";
import AreaCode from "../view/FrontDesk/Setting/AreaCode";
import AddTask from "../view/FrontDesk/TaskMaster/AddTask";
import AddExpenses from "../view/FrontDesk/Finance/Expense/AddExpense";
import AddMiscellanousIncome from "../view/FrontDesk/Finance/MiscellanousIncome/AddMiscellanousIncome";
import StaffAssignList from "../view/FrontDesk/HouseKeeping/StaffAssignList";
import AddSetupHotel from "../view/FrontDesk/HotelMaster/AddSetupHotel";
import NightAudit from "../view/NightAudit";
import AssignedRoomforMaid from "../view/FrontDesk/HouseKeeping/StaffAssignList/AssignRoomforMaid";
import BilllingDetails from "../view/FrontDesk/Finance/BillingDetails";
import BookingDetails from "../view/FrontDesk/Booking/BookingDetails";
import PosDashboard from "../view/FrontDesk/Dashboard/PosDashboard";

// import Header from './Components/Header';


let AuthRoute = [
    {
        compo:<Signup />, route:'/signup'
    },
    {
        compo:<CategoryType />, route:'/catType'
    },
    {
        compo:<CategoryList />, route:'/catList'
    },
    {
        compo:<CouponList />, route:'/couponlist'
    },
    {
        compo:<RatePlan />,  route:"/rateplan" 
    },{
        route:"/alltasks", compo:<AllTasks />
    },
    {
        compo:<SubCategoryList />, route:'/subcategorylist'
    },
    {
    compo:<AllLaunryRates/>, route:'/allLaundryRates'
    },
    {
        compo:<AllLaundryServices />, route:'/allLaundryServices'
    },
    {
        compo:<OtherServices />, route:'/otherServices'
    },
    {
        compo:<CancelReport />, route:'/cancelReport'
    },
    {
        compo:<ReservationReport />, route:'/reservationReport'
    },
    {
        compo:<ReservationSummary />, route:'/reservationSummary'
    },
    {
        compo:<AdHocBills />, route:'/adHocBills'
    },
    {
        compo:<BokkingRoom />, route:'/bookingRoom'
    },
    {
        compo:<BokkingDorm />, route:'/bookingDorm'
    },
    {
        compo:<ViewRoom />, route:'/viewRoom'
    },
    {
        compo:<AddPermission />, route:'/addpermission'
    },
    {
        compo:<SystemSettings />, route:'/systemsetting'
    },
    {
        compo:<PosSettings />, route:'/possetting'
    },
    {
        compo:<HousekeepingStaffList />, route:'/housekeepingstaff'
    },
    {
        compo:<StaffAssignRoom />, route:'/staffassignroom'
    },
    {
        compo:<HousekeepingLog/>,route:'/housekeepinglog'
    },
    {
        compo:<MiscellaneousIncome/>,route:'/miscellaneousIncome'
    },
    {
        compo:<Expenses/>,route:'/expenses'
    },
    {
        compo:<ExpenseCategoryMaster/>,route:'/expenseCategoryMaster'
    },
    {
        compo:<ViewHotels/>,route:'/viewHotels'
    },
    {
        compo:<VendorMaster/>,route:'/vendorMaster'
    },
    {
        compo:<DailyReservationSummary/>,route:'/dailyReservationSummary'
    },
    {
        compo:<MonthlyReservationSummary/>,route:'/monthlyReservationSummary'
    },
     {
        compo:<AllBookings/>,route:'/allBookings'
    },
    {
        compo:<OccupancyReport/>,route:'/occupancyReport'
    },
    {
        compo:<TravelAgentReport/>,route:'/travelAgentReport'
    },
    {
        compo:<SalesReport/>,route:'/salesReport'
    },
    {
        compo:<UserLoginReport/>,route:'/userLoginReprot'
    },
    {
        compo:<Addamenities/>,route:'/addAmenities'
    },
    {
        compo:<InvoiceReport/>,route:'/invoiceReport'
    },
    {
        compo:<AddNewCategory/>,route:'/addNewCategory'
    },
    {
        compo:<AddCategoryType/>,route:'/addCategoryType'
    },
    {
        compo:<WareHouseMaster/>,route:'/warehouseMaster'
    },
    {
        compo:<GuestFolio/>,route:'/guestFolio'
    },
    {
        compo:<AddSubCategory/>,route:'/addSubCategory'
    },
    {
        compo:<AddNewVendor/>,route:'/addNewVendor'
    },
    {
        compo:<AddWarehouse/>,route:'/addWarehouse'
    },
    {
        compo:<AddExpensesCategory/>,route:'/addExpensesCategory'
    },
    {
        compo:<UOMmaster/>,route:'/uomMaster'
    },
    {
        compo:<AddUOM/>,route:'/addUOM'
    },
    {
        compo:<FacilityMaster/>,route:'/facilityMaster'
    },
    {
        compo:<NatureOfVisit/>,route:'/natureOfVisit'
    },
    {
        compo:<ProfitCenter/>,route:'/profitCenter'
    },
    {
        compo:<PaymentSettings/>,route:'/paymentSettings'
    },
    {
        compo:<AddNatureofVisit/>,route:'/addNatureOfVisit'
    },
    {
        compo:<AddProfitCenter/>,route:'/addProfitCenter'
    },
    {
        compo:<AddFacility/>,route:'/addfacility'
    },
    {
        compo:<AddPaymentSettings/>,route:'/addPaymentSettings'
    },
    {
        compo:<AllTransaction/>,route:'/allTransaction'
    },
    {
        compo:<AddProduct/>,route:'/addProduct'
    },
    {
        compo:<BehaviourMaster/>,route:'/behaviourMaster'
    },
    {
      compo:<AddBehaviour/>,route:'/behaviourMaster'
    },
    {
        compo:<AddRawMaterial/>,route:'/addRawMaterial'
    },
    {
        compo:<AddAssetCategory/>,route:'/addAssetCategory'
    },
    {
        compo:<CurrencySettings/>,route:'/currencySettings'
    },
    {
        compo:<UserList/>,route:'/userList'
    },
    {
        compo:<UserRole/>,route:'/userRole'
    },{
        compo:<AddUser/>,route:'/addUser'
    },
    {
        compo:<AddDiscount/>,route:'/addDiscount'
    },
    {
        compo:<AddWaiter/>,route:'/addWaiter'
    },
    {
        compo:<RestLaundryRates/>,route:'/restLaundryRates'
    },
    {
        compo:<TableMaster/>,route:'/tableMaster'
    },
    {
        compo:<AddHouseKeeper/>,route:'/addHousekeeper'
    },
    {
        compo:<Corporates/>,route:'/corporates'
    },
    {
        compo:<DiscountRules/>,route:'/discountRules'
    },
    {
        compo:<AddCorporate/>,route:'/addCorporate'
    },
    {
        compo:<AddNewAsset/>,route:'/addNewAsset'
    },
    {
        compo:<TaxType/>,route:'/taxType'
    },
    {
        compo:<AddTaxtype/>,route:'/addTaxType'
    },
    {
        compo:<TaxCategory/>,route:'/taxCategory'
    },
    {
        compo:<AddTaxcategory/>,route:'/addTaxCategory'
    },
    {
        compo:<TaxRule/>,route:'/taxrule'
    },
    {
        compo:<BrokerMaster/>,route:'/brokermaster'
    },
    {
        compo:<AddBroker/>,route:'/addbroker'
    },
    {
        compo:<CompanyMaster/>,route:'/companymaster'
    },
    {
        compo:<RoleandPermission/>,route:'/roleandpermission'
    },
    {
        compo:<StockSummaryReport/>,route:'/stocksummaryreport'
    },
    {
        compo:<SaleList/>,route:'/salelist'
    },
    {
        compo:<CancelSales/>,route:'/cancelsales'
    },
    {
        compo:<PurchaseSummaryReport/>,route:'/purchasesummaryreport'
    },
    {
        compo:<TransferSummaryReport/>,route:'/transfersummaryreport'
    },
    {
        compo:<InvoiceSetting/>,route:'/invoicesetting'
    },
    {
        compo:<Dashboard/>,route:'/dashboard'
    },
    {
        compo:<ProductMaster/>,route:'/productmaster'
    },
    {
        compo:<KOTCancel/>,route:'/kotcancel'
    },
    {
        compo:<KOTPlaced/>,route:'/kotplaced'
    },
    {
        compo:<AddSeason/>,route:'/addseason'
    },
    {
        compo:<AddUserRole/>,route:'/adduserrole'
    },
    {
        compo:<BookingList/>,route:'/bookinglist'
    },
    {
        compo:<AddCoupan/>,route:'/addcoupan'
    },
    {
        compo:<RoomCreation/>,route:'/roomcreation'
    },
    {
        compo:<AddRoom/>,route:'/addroom'
    },
    {
        compo:<AddBed/>,route:'/addbed'
    },
    {
        compo:<DormLayout/>,route:'/dormlayout'
    },
    {
        compo:<ViewBed/>,route:'/viewbed'
    }, {
        compo:<AddTask/>,route:'/addtask'
    },
    {
        compo:<AddExpenses/>,route:'/addexpense'
    },
    {
        compo:<AddMiscellanousIncome/>,route:'/addmiscellanous'
    },
    {
        compo:<StaffAssignList/>,route:'/staffassignlist'
    },
    {
        compo:<AddSetupHotel/>,route:'/setuphotels'
    },
    {
        compo:<NightAudit/>,route:'/nightaudit'
    },
    {
        compo:<AssignedRoomforMaid/>,route:'/assignroommaid'
    },
    {
        compo:<BilllingDetails/>,route:'/billingdetail'
    },
    {
        compo:<BookingDetails/>,route:'/bookingdetail'
    },
    {
        compo:<PosDashboard/>,route:'/posDashboard'
    }
  

]



export default AuthRoute