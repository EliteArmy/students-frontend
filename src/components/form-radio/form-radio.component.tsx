import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface RadioProps {
  options: { value: boolean; label: string }[];
  radioLabel: string;
  radioName: string;
  onSetRadio: Function;
}

const RadioButtonsGroup = (props: RadioProps) => {
  const { options, radioLabel, radioName, onSetRadio } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSetRadio(event);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{radioLabel}</FormLabel>
      <RadioGroup
        row
        aria-label={radioName}
        defaultValue={options[0]?.value}
        name={radioName}
        onChange={handleChange}
      >
        {options.map(option => (
          <FormControlLabel
            key={option.label}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioButtonsGroup;
