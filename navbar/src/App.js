import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Myform from './components/Myform';








import Serverdetailsform from './forms/Serverdetailsform';
import Providersform from './forms/Providersform';
import Customersform from './forms/Customersform';
import Didform from './forms/Didform';
import Servicesform from './forms/Servicesform';
import Telcoproviderform from './forms/Telcoproviderform';
import Palatnumberform from './forms/Palatnumberform';
import Dialerlink from './Dialerlink';
import Myjquery from './Myjquery';



import EditServerDetailsform   from "./components/EditFormss/EditServerDetailsform"
import EditProvidersform from './EditForms/EditProvidersform';
import EditCustomersform from './EditForms/EditCustomersform';
import EditServicesform from './EditForms/EditServicesform';
import EditTelcoproviderform from './EditForms/EditTelcoproviderform';
import EditPalatnumberform from './EditForms/EditPalatnumberform';
import EditDidform from './EditForms/EditDidform';
import Models from './Models';




import Serverdetails from './components/tables/Serverdetails';
import Providers from './components/tables/Providers';
import Customers from './components/tables/Customers';
import Did from './components/tables/Did';
import Services from './components/tables/Services';
import Telcoprovider from './components/tables/Telcoprovider';
import Palatnumber from './components/tables/Palatnumber';



import ServerForm from './components/FORMS/ServerForm';





function App() {
  return (

   
 <Router>
      <MyNavbar/>
        <Routes>
          <Route path="/Serverdetails" element={<Serverdetails/>}/>
          <Route path="/ProvidersDetails" element={<Providers/>}/>
          <Route path="/CustomerDetails" element={<Customers/>}/>
          <Route path="/didDetails" element={<Did/>}/>
          <Route path="/ServicesDetails" element={<Services/>}/>
          <Route path="/telcoProviderDetails" element={<Telcoprovider/>}/>
          <Route path="/PalatNumberDetails" element={<Palatnumber/>}/>
          <Route path="/ServerDetail" element={<Serverdetailsform/>}/>
          <Route path="/ProvidersDetail" element={<Providersform/>}/>
          <Route path="/CustomerDetail" element={<Customersform/>}/>
          <Route path="/didDetail" element={<Didform/>}/>
          <Route path="/ServicesDetail" element={<Servicesform/>}/>
          <Route path="/telcoProviderDetail" element={<Telcoproviderform/>}/>
          <Route path="/PalatNumberDetail" element={<Palatnumberform/>}/>
          <Route path="/dialerlink" element={<Dialerlink/>}/>
          
          
          {/* <Route path="/serverdEdit/:id" element={<EditServerDetailsform/>}/> */}
          <Route path="/Serverdetails" element={<ServerForm/>}/>

          <Route path="/providerdEdit/:id" element={<EditProvidersform/>}/>
          <Route path="/customerdEdit/:id" element={<EditCustomersform/>}/>
          <Route path="/diddEdit/:id" element={<EditDidform/>}/>
          <Route path="/servicesdEdit/:id" element={<EditServicesform/>}/>
          <Route path="/telecoproviderdEdit/:id" element={<EditTelcoproviderform/>}/>
          <Route path="/palatnumberdEdit/:id" element={<EditPalatnumberform/>}/>
        </Routes>
        
      </Router> 
  );
}

    

export default App;








