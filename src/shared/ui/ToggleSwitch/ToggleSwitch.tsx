import React from 'react';
import csl from './ToggleSwitch.module.scss';

interface ToggleSwitchProps {
    checked: boolean;
    onChange: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
    return (
        <label className={csl.toggleSwitch}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className={csl.ToggleSlider}></span>
        </label>
    );
};

export default ToggleSwitch;
