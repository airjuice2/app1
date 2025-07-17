import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/style.css'
import { BrowserRouter, Routes, Route } from 'react-router'

// шаблоны
import WelcomeTemplate from './welcome/Template'
import ReportsTemplate from './reports/Template'
import ReportForeManTemplate from './reports/foreman/Template'

// главные страницы
import WelcomeIndex from './welcome/Index'
import ReportsIndex from './reports/Index'
import ReportForemanIndex from './reports/foreman/Index'

export default function App() {
  return (<>
    <BrowserRouter>
      <div className="app-wrapper">
        <Routes>

          <Route path='/' element={<WelcomeTemplate />}>
            <Route index element={<WelcomeIndex />} />
          </Route>

          {/* <Route path='/reports' element={<ReportsTemplate />}>
            <Route index element={<ReportsIndex />} />
            <Route path='foreman' element={<ReportForeManTemplate />}>
              <Route index element={<ReportForemanIndex />} />
            </Route>
          </Route> */}
          <Route path='/reports/foreman' element={<ReportForeManTemplate />}>
            <Route index element={<ReportForemanIndex />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  </>)
}