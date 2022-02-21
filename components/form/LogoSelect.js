import React, { PropTypes } from 'react';
import Select from 'react-select';

const options = [
  { imgName: '_empty', value: '/static/logo/_empty.svg', label: 'Lag uten logo' },
  { imgName: 'asker', value: '/static/logo/asker.svg', label: 'Asker' },
  { imgName: 'askim', value: '/static/logo/askim.svg', label: 'Askim' },
  {
    imgName: 'austratt',
    value: '/static/logo/austratt.svg',
    label: 'Austrått',
  },
  { imgName: 'bergkameratene', value: '/static/logo/bergkameratene.svg', label: 'Bergkameratene' },
  {
    imgName: 'bktromso',
    value: '/static/logo/bktromso.svg',
    label: 'BK Tromsø',
  },
  {
    imgName: 'blindheim',
    value: '/static/logo/blindheim.svg',
    label: 'Blindheim',
  },
  {
    imgName: 'blussuvoll',
    value: '/static/logo/blussuvoll.svg',
    label: 'Blussuvoll',
  },
  { imgName: 'bodo', value: '/static/logo/bodo.svg', label: 'Bodø' },
  { imgName: 'breimsbygda', value: '/static/logo/breimsbygda.svg', label: 'Breimsbygda' },
  { imgName: 'bsi', value: '/static/logo/bsi.svg', label: 'BSI' },
  { imgName: 'dristug', value: '/static/logo/dristug.svg', label: 'Dristug' },
  {
    imgName: 'egersund',
    value: '/static/logo/egersund.svg',
    label: 'Egersund',
  },
  { imgName: 'farsund', value: '/static/logo/farsund.svg', label: 'Farsund' },
  { imgName: 'fjellmann', value: '/static/logo/fjellmann.svg', label: 'Fjellmann' },
  { imgName: 'forde', value: '/static/logo/forde.svg', label: 'Førde' },
  { imgName: 'framnes', value: '/static/logo/framnes.svg', label: 'Framnes' },
  { imgName: 'gjesdal', value: '/static/logo/gjesdal.svg', label: 'Gjesdal' },
  { imgName: 'gneist', value: '/static/logo/gneist.svg', label: 'Gneist' },
  { imgName: 'grong', value: '/static/logo/grong.svg', label: 'Grong' },
  { imgName: 'gulset', value: '/static/logo/gulset.svg', label: 'Gulset' },
  {
    imgName: 'haugesund',
    value: '/static/logo/haugesund.svg',
    label: 'Haugesund',
  },
  { imgName: 'holstad', value: '/static/logo/holstad.svg', label: 'Holstad' },
  { imgName: 'hvidovre', value: '/static/logo/hvidovre.svg', label: 'Hvidovre' },
  { imgName: 'jardar', value: '/static/logo/jardar.svg', label: 'Jardar' },
  { imgName: 'kolbotn', value: '/static/logo/kolbotn.svg', label: 'Kolbotn' },
  { imgName: 'koll', value: '/static/logo/koll.svg', label: 'Koll' },
  { imgName: 'ksk', value: '/static/logo/ksk.svg', label: 'KSK' },
  { imgName: 'lier', value: '/static/logo/lier.svg', label: 'Lier' },
  { imgName: 'lierne', value: '/static/logo/lierne.svg', label: 'Lierne' },
  { imgName: 'marienlyst', value: '/static/logo/marienlyst.svg', label: 'Marienlyst' },
  { imgName: 'ntnui', value: '/static/logo/ntnui.svg', label: 'NTNUI' },
  { imgName: 'oskil', value: '/static/logo/oksil.svg', label: 'ØKSIL' },
  { imgName: 'osi', value: '/static/logo/osi.svg', label: 'OSI' },
  {
    imgName: 'oslovolley',
    value: '/static/logo/oslovolley.svg',
    label: 'Oslo Volley',
  },
  {
    imgName: 'randaberg',
    value: '/static/logo/randaberg.svg',
    label: 'Randaberg',
  },
  { imgName: 'rival', value: '/static/logo/rival.svg', label: 'Rival' },
  { imgName: 'rossvoll', value: '/static/logo/rossvoll.svg', label: 'Rossvoll' },
  { imgName: 'sandefjord', value: '/static/logo/sandefjord.svg', label: 'Sandefjord' },
  { imgName: 'sandnes', value: '/static/logo/sandnes.svg', label: 'Sandnes' },
  {
    imgName: 'sarpsborg',
    value: '/static/logo/sarpsborg.svg',
    label: 'Sarpsborg',
  },
  { imgName: 'skjetten', value: '/static/logo/skjetten.svg', label: 'Skjetten' },
  { imgName: 'snaasa', value: '/static/logo/snaasa.svg', label: 'Snåsa' },
  { imgName: 'sortland', value: '/static/logo/sortland.svg', label: 'Sortland' },
  {
    imgName: 'spiritlorenskog',
    value: '/static/logo/spiritlorenskog.svg',
    label: 'Spirit Lørenskog',
  },
  { imgName: 'stavanger', value: '/static/logo/kfumstavanger.svg', label: 'KFUM Stavanger', },
  { imgName: 'stod', value: '/static/logo/stod.svg', label: 'Stod' },
  { imgName: 'stord', value: '/static/logo/stord.svg', label: 'Stord' },
  { imgName: 'strandulv', value: '/static/logo/strandulv.svg', label: 'Strand-Ulv', },
  { imgName: 'strandvik', value: '/static/logo/strandvik.svg', label: 'Strandvik', },
  {
    imgName: 'sunnfjord',
    value: '/static/logo/sunnfjord.svg',
    label: 'Sunnfjord',
  },
  { imgName: 'svelgen', value: '/static/logo/svelgen.svg', label: 'Svelgen' },
  { imgName: 'tbk', value: '/static/logo/tbk.svg', label: 'TBK' },
  {
    imgName: 'gdansk',
    value: '/static/logo/gdansk.svg',
    label: 'Trefl Gdańsk',
  },
  { imgName: 'tsi', value: '/static/logo/tsi.svg', label: 'TSI' },
  {
    imgName: 'tonsberg',
    value: '/static/logo/tonsberg.svg',
    label: 'Tønsberg',
  },
  { imgName: 'torvastad', value: '/static/logo/torvastad.svg', label: 'Torvastad' },
  { imgName: 'tvn', value: '/static/logo/tvn.svg', label: 'TVN' },
  { imgName: 'vestli', value: '/static/logo/vestli.svg', label: 'Vestli' },
  { imgName: 'vikersund', value: '/static/logo/vikersund.svg', label: 'Vikersund' },
  { imgName: 'viking', value: '/static/logo/viking.svg', label: 'TIF Viking' },
  { imgName: 'vindafjord', value: '/static/logo/vindafjord.svg', label: 'Vindafjord' },
  { imgName: 'volda', value: '/static/logo/volda.svg', label: 'KFUM Volda' },
  { imgName: 'aalesund', value: '/static/logo/aalesund.svg', label: 'Ålesund' },
];

function renderOption(option) {
  return (
    <div className="select-logo-option">
      <img className="select-logo-image" src={option.value} alt="Team Logo" />
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
};

export default LogoSelect;
