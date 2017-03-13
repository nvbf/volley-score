import React, { PropTypes } from 'react';
import Select from 'react-select';

const options = [
  { value: 'askim', img: '/static/logo/askim.svg', label: 'Askim' },
  { value: 'austratt', img: '/static/logo/austratt.svg', label: 'Austrått' },
  { value: 'bktromso', img: '/static/logo/bktromso.svg', label: 'BK Tromsø' },
  { value: 'blindheim', img: '/static/logo/blindheim.svg', label: 'Blindheim' },
  { value: 'blussuvoll', img: '/static/logo/blussuvoll.svg', label: 'Blussuvoll' },
  { value: 'bsi', img: '/static/logo/bsi.svg', label: 'BSI' },
  { value: 'dristug', img: '/static/logo/dristug.svg', label: 'Dristug' },
  { value: 'egersund', img: '/static/logo/egersund.svg', label: 'Egersund' },
  { value: 'forde', img: '/static/logo/forde.svg', label: 'Førde' },
  { value: 'gneist', img: '/static/logo/gneist.svg', label: 'Gneist' },
  { value: 'koll', img: '/static/logo/koll.svg', label: 'Koll' },
  { value: 'ksk', img: '/static/logo/ksk.svg', label: 'KSK' },
  { value: 'lierne', img: '/static/logo/lierne.svg', label: 'Lierne' },
  { value: 'ntnui', img: '/static/logo/ntnui.svg', label: 'NTNUI' },
  { value: 'oskil', img: '/static/logo/oksil.svg', label: 'ØKSIL' },
  { value: 'osi', img: '/static/logo/osi.svg', label: 'OSI' },
  { value: 'oslovolley', img: '/static/logo/oslovolley.svg', label: 'Oslo Volley' },
  { value: 'randaberg', img: '/static/logo/randaberg.svg', label: 'Randaberg' },
  { value: 'sandnes', img: '/static/logo/sandnes.svg', label: 'Sandnes' },
  { value: 'spiritlorenskog', img: '/static/logo/spiritlorenskog.svg', label: 'Spirit Lørenskog' },
  { value: 'stod', img: '/static/logo/stod.svg', label: 'Stod' },
  { value: 'sunnfjord', img: '/static/logo/sunnfjord.svg', label: 'Sunnfjord' },
  { value: 'tonsberg', img: '/static/logo/tonsberg.svg', label: 'Tønsberg' },
  { value: 'tvn', img: '/static/logo/tvn.svg', label: 'TVN' },
  { value: 'vestli', img: '/static/logo/vestli.svg', label: 'Vestli' },
  { value: 'viking', img: '/static/logo/viking.svg', label: 'Viking' },
];

function renderOption(option) {
  return (
    <div className="select-logo-option">
      <img className="select-logo-image" src={option.img} />
      <span>{option.label}</span>
    </div>
  );
}

function LogoSelect(props) {
  return (
    <Select
      name="select-logo"
      placeholder="Select a logo"
      value={props.selected}
      options={options}
      clearable={false}
      searchable={false}
      onChange={props.onChange}
      optionRenderer={renderOption}
      valueRenderer={renderOption}
    />
  );
}

LogoSelect.propTypes = {
  onChange: PropTypes.func,
  selected: PropTypes.string,
}

export default LogoSelect;
