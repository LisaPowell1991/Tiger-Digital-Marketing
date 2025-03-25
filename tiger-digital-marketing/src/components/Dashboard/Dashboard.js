import React, { useEffect, useState } from 'react';
import { firestore } from '../../config/firebase';
import { Line } from 'react-chartjs-2';
import AddUser from './AddUser';

function Dashboard() {
    const [report, setReport] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            const reportDoc = await firestore.collection('reports').doc('overview').get();
            setReport(reportDoc.data());
        };
        fetchReport();
    }, []);

    if (!report) return <div>Loading...</div>;

    const data = {
        labels: ['Sessions', 'Pageviews', 'Avg. Session Duration', 'Total Users', 'Bounce Rate', 'New User'],
        datasets: [
            {
                label: 'Overview Report',
                data: [report.sessions, report.pageviews, report.avgSessionDuration, report.totalUsers, report.bounceRate, report.newUser],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <div>
            <h2>Overview Report</h2>
            <Line data={data} />
            <AddUser />
        </div>
    );
}

export default Dashboard;