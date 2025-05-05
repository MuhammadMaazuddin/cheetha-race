import React from 'react'


function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <nav>nested app</nav>
        <section>{children}</section>
      </div>
    );
  }
  

export default DashboardLayout