import React from 'react';
import csl from './ToggleSwitch.module.scss';

interface ToggleSwitchProps {
    checked: boolean;
    onChange: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => (
    <label className={csl.ToggleSwitch} htmlFor="toggleSwitch">
        <input
            type="checkbox"
            id="toggleSwitch"
            checked={checked}
            onChange={onChange}
        />
        <span className={csl.ToggleSlider} />
    </label>
);

export default ToggleSwitch;
