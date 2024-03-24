import React from 'react';
import csl from './ToggleSwitch.module.scss';

interface ToggleSwitchProps {
    checked: boolean;
    onChange: () => void;
    theme: 'light' | 'dark';
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, theme }) => (
    <label className={csl.ToggleSwitch} htmlFor="toggleSwitch">
        <input
            type="checkbox"
            id="toggleSwitch"
            checked={checked}
            onChange={onChange}
        />
        <span className={csl.ToggleSlider} />
        {theme === 'light' ? <i className="pi pi-sun" /> : <i className="pi pi-moon" />}
    </label>
);

export default ToggleSwitch;
