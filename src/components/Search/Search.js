import search from "./Search.module.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import Select from 'react-select';

const Search = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const optionCity = [
      { value: 'Hammasi', label: 'Hammasi' },
      { value: 'Qarshi Shaxri', label: 'Qarshi Shaxri' },
      { value: 'Qarshi Tumani', label: 'Qarshi Tumani' },
      { value: 'Shahrisabz shahri', label: 'Shahrisabz shahri' },
      { value: 'Shahrisabz tumani', label: 'Shahrisabz tumani' },
      { value: 'Yakkabog\' tumani', label: 'Yakkabog\' tumani' },
      { value: 'Qamashi tumani', label: 'Qamashi tumani' },
      { value: 'Nishon tumani', label: 'Nishon tumani' },
      { value: 'Muborak tumani', label: 'Muborak tumani' },
      { value: 'Mirishkor tumani', label: 'Mirishkor tumani' },
      { value: 'Koson tumani', label: 'Koson tumani' },
      { value: 'Kitob tumani', label: 'Kitob tumani' },
      { value: 'Kasbi tumani', label: 'Kasbi tumani' },
      { value: 'G\'uzor tumani', label: 'G\'uzor tumani' },
      { value: 'Dehqonobod tumani', label: 'Dehqonobod tumani' },
      { value: 'Chiroqchi tumani', label: 'Chiroqchi tumani' }
    ];
    const optionMonth = [
      { value: 'Hammasi', label: 'Hammasi' },
      { value: 'Yanvar', label: 'Yanvar' },
      { value: 'Fevral', label: 'Fevral' },
      { value: 'Mart', label: 'Mart' },
      { value: 'Aprel', label: 'Aprel' },
      { value: 'May', label: 'May' },
      { value: 'Iyun', label: 'Iyun' },
      { value: 'Iyul', label: 'Iyul' },
      { value: 'Avgust', label: 'Avgust' },
      { value: 'Sentabr', label: 'Sentabr' },
      { value: 'Oktabr', label: 'Oktabr' },
      { value: 'Noyabr', label: 'Noyabr' },
      { value: 'Dekabr', label: 'Dekabr' }
    ];
    const optionType = [
      { value: 'Hammasi', label: 'Hammasi' },
      { value: 'Piyoda', label: 'Piyoda' },
      { value: 'Velosiped', label: 'Velosiped' },
      { value: 'Qor avtomobili', label: 'Qor avtomobili' },
      { value: 'Alpinizm', label: 'Alpinizm' },
      { value: 'Yugurish', label: 'Yugurish' },
      { value: 'Chang\'i', label: 'Chang\'i' },
      { value: 'Baliq ovlash', label: 'Baliq ovlash' },
      { value: 'Avgust', label: 'Avgust' },
      { value: 'G\'or', label: 'G\'or' },
      { value: 'Otliq', label: 'Otliq' },
      { value: 'Yo\'lsizlik sharoitlarida', label: 'Yo\'lsizlik sharoitlarida' }
    ];

    const handleChangeCity = selected => {
      setSelectedCity(selected);
    };
    const handleChangeMonth = selected => {
      setSelectedMonth(selected);
    };
    const handleChangeType = selected => {
      setSelectedType(selected);
    };

    const submitData = () => {
      window.location.assign(`/search?city=${selectedCity.value}&month=${selectedMonth.value}&type=${selectedType.value}`);
    };

    return (
        <div className={search.search}>
          <Tabs style={{width: "700px"}} selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList>
              <Tab>Joylashuv</Tab>
              <Tab>Oy sanasi</Tab>
              <Tab>Turi</Tab>
              {/* Marshrutlar Sayohatchilar Ekskursiyalar */}
            </TabList>
            <div className={search.tabPanel1}>
              <TabPanel>
                <Select
                  value={selectedCity}
                  onChange={handleChangeCity}
                  options={optionCity}
                  placeholder={"Shahar/Tumanni tanlang"}
                />
              </TabPanel>
            </div>
            <div className={search.tabPanel1}>
              <TabPanel>
                <Select
                  value={selectedMonth}
                  onChange={handleChangeMonth}
                  options={optionMonth}
                  placeholder={"Oyni tanlang"}
                />
              </TabPanel>
            </div>
            <div className={search.tabPanel1}>
              <TabPanel>
                <Select
                  value={selectedType}
                  onChange={handleChangeType}
                  options={optionType}
                  placeholder={"Turini tanlang"}
                />
              </TabPanel>
            </div>
          </Tabs>
          <button onClick={submitData} type="submit" className={search.submit}>Qidirish</button>
        </div>
    )
}

export default Search;