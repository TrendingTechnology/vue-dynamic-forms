import FormControl from '@/core/utils/form-control.model.js';

const props = {
  formControl: {
    default: () => new FormControl(),
    type: Object,
  },
};

const InputSelect = {
  name: 'asInputSelect',
  props,
};

export default InputSelect;