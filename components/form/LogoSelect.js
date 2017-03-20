import React, { PropTypes } from 'react';
import Select from 'react-select';

const options = [
  { imgName: 'askim', value: '/static/logo/askim.svg', label: 'Askim' },
  { imgName: 'austratt', value: '/static/logo/austratt.svg', label: 'Austrått' },
  { imgName: 'bktromso', value: '/static/logo/bktromso.svg', label: 'BK Tromsø' },
  { imgName: 'blindheim', value: '/static/logo/blindheim.svg', label: 'Blindheim' },
  { imgName: 'blussuvoll', value: '/static/logo/blussuvoll.svg', label: 'Blussuvoll' },
  { imgName: 'bsi', value: '/static/logo/bsi.svg', label: 'BSI' },
  { imgName: 'dristug', value: '/static/logo/dristug.svg', label: 'Dristug' },
  { imgName: 'egersund', value: '/static/logo/egersund.svg', label: 'Egersund' },
  { imgName: 'forde', value: '/static/logo/forde.svg', label: 'Førde' },
  { imgName: 'gneist', value: '/static/logo/gneist.svg', label: 'Gneist' },
  { imgName: 'koll', value: '/static/logo/koll.svg', label: 'Koll' },
  { imgName: 'ksk', value: '/static/logo/ksk.svg', label: 'KSK' },
  { imgName: 'lierne', value: '/static/logo/lierne.svg', label: 'Lierne' },
  { imgName: 'ntnui', value: '/static/logo/ntnui.svg', label: 'NTNUI' },
  { imgName: 'oskil', value: '/static/logo/oksil.svg', label: 'ØKSIL' },
  { imgName: 'osi', value: '/static/logo/osi.svg', label: 'OSI' },
  { imgName: 'oslovolley', value: '/static/logo/oslovolley.svg', label: 'Oslo Volley' },
  { imgName: 'randaberg', value: '/static/logo/randaberg.svg', label: 'Randaberg' },
  { imgName: 'sandnes', value: '/static/logo/sandnes.svg', label: 'Sandnes' },
  { imgName: 'spiritlorenskog', value: '/static/logo/spiritlorenskog.svg', label: 'Spirit Lørenskog' },
  { imgName: 'stod', value: '/static/logo/stod.svg', label: 'Stod' },
  { imgName: 'sunnfjord', value: '/static/logo/sunnfjord.svg', label: 'Sunnfjord' },
  { imgName: 'tbk', value: '/static/logo/tbk.svg', label: 'TBK' },
  { imgName: 'tonsberg', value: '/static/logo/tonsberg.svg', label: 'Tønsberg' },
  { imgName: 'tvn', value: '/static/logo/tvn.svg', label: 'TVN' },
  { imgName: 'vestli', value: '/static/logo/vestli.svg', label: 'Vestli' },
  { imgName: 'viking', value: '/static/logo/viking.svg', label: 'Viking' },
];

function renderOption(option) {
  return (
    <div className="select-logo-option">
      <img className="select-logo-image" src={option.value} />
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
