import React from 'react';
import {LibraryCard} from '../components/LibraryCard';
import './CareerLibrary.css';

export const CareerLibrary = () => {
    return (
        <div className="career-container">
            <title>CareerLibrary</title>
            <header className="header">
                <div className="logo">Find My Career</div>
                <div className="user-info">
                    <span>User: Rohan</span>
                    <span>Cut Off: 159</span>
                </div>
            </header>
            <div className="career-grid">
                <LibraryCard title="Medical Science" image="medical_science.png" option="(8 Career Options)" />
                <LibraryCard title="EntrePreneurship" image="entrepreneurship.png" option="(1 Career Options)" />
                <LibraryCard title="Management" image="management.png" option="(13 Career Options)" />
                <LibraryCard title="Medical Science" image="medical_science2.png" option="(8 Career Options)" />
                <LibraryCard title="Arts & Design" image="arts_design.png" option="(9 Career Options)" />
                <LibraryCard title="Defence Service" image="defence_service.png" option="(5 Career Options)" />
                <LibraryCard title="Engineering" image="engineering.png" option="(30 Career Options)" />
                <LibraryCard title="Law" image="law.png" option="(11 Career Options)" />
            </div>
        </div>
    );
};