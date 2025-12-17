import { useState } from 'react';

type TabData = {
  id: string;
  label: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
}

const tabItems: TabData[] = [
  {
    id: 'tab1',
    label: 'Fintech',
    content: 'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    imageSrc: 'src/assets/images/industry-01-fintech.svg',
    imageAlt: 'fintech',
  },
  {
    id: 'tab2',
    label: 'E-Commerce',
    content: 'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    imageSrc: 'src/assets/images/industry-02-ecommerce.svg',
    imageAlt: 'ecommerce',
  },
  {
    id: 'tab3',
    label: 'Healthcare',
    content: 'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    imageSrc: 'src/assets/images/industry-03-healthcare.svg',
    imageAlt: 'healthcare',
  },
];

const Industry = () => {
  const [activeTab, setActiveTab] = useState<string>(tabItems[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section id="industrysection" className="mb-20">
      <h2 className="text-3xl my-5 mx-5 md:mx-20 2xl:mx-55">
        Built for Your Industry
      </h2>
      <p className="text-gray-500 mx-5 md:mx-20 2xl:mx-55">
        We’ve helped companies across industries launch smarter, faster, and more securely.
      </p>

      <div className="mx-5 md:mx-20 2xl:mx-55 my-5 grid md:grid-cols-5">

        {/* Tab Buttons / Navigation */}
        <div className="md:col-span-1">
          {tabItems.map((tab) => {
            const isActive = tab.id === activeTab;
            const buttonClasses = `px-4 py-2 text-sm text-left w-full font-medium border-l-2 mb-1 ${
              isActive
                ? 'text-gray-700 border-orange-500' // Active state classes
                : 'text-gray-700 border-transparent' // Inactive state classes
            }`;

            return (
              <button
                key={tab.id}
                className={buttonClasses}
                // Use a standard onClick handler to update the state
                onClick={() => handleTabClick(tab.id)}
                aria-selected={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="md:col-span-4">
          {tabItems.map((tab) => {
            const isActive = tab.id === activeTab;
            // In React, conditional rendering using the 'hidden' class or a logical AND (&&) is preferred
            // instead of iterating over all content divs to add/remove classes.
            return (
              <div
                key={tab.id}
                id={tab.id}
                className={`p-4 ${isActive ? '' : 'hidden'}`} // Conditionally apply 'hidden'
              >
                <p className="mb-6">{tab.content}</p>
                <img
                  src={tab.imageSrc}
                  className="rounded-xl"
                  alt={tab.imageAlt}
                />
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

export default Industry;