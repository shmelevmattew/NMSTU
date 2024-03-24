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
        <div className={csl.toggle__div} style={{ left: checked ? '20px' : '2px' }}>
            {theme === 'light' ? <i className="pi pi-sun" /> : <i className="pi pi-moon" />}
        </div>
    </label>
);

export default ToggleSwitch;
