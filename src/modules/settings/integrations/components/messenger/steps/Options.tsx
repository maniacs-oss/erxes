import React, { Component } from 'react';
import Toggle from 'react-toggle';
import { SelectBrand } from '../..';
import {
  ControlLabel,
  FormControl,
  FormGroup
} from '../../../../../common/components';
import { FlexItem, LeftItem } from '../../../../../common/components/step/styles';
import { IBrand } from '../../../../brands/types';

type Props = {
  onChange: (name: string, value: string) => void,
  brandId?: string,
  languageCode?: string,
  brands?: IBrand[],
  notifyCustomer?: boolean
};

class Options extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onChangeFunction = this.onChangeFunction.bind(this);
  }

  onChangeFunction(name, value) {
    this.setState({ [name]: value });
    this.props.onChange(name, value);
  }

  render() {
    return (
      <FlexItem>
        <LeftItem>
          <SelectBrand
            brands={this.props.brands}
            defaultValue={this.props.brandId}
            onChange={e => this.onChangeFunction('brandId', e.target.value)}
          />

          <FormGroup>
            <ControlLabel>Language</ControlLabel>

            <FormControl
              componentClass="select"
              id="languageCode"
              defaultValue={this.props.languageCode}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                this.onChangeFunction('languageCode', e.currentTarget.value)
              }
            >
              <option />
              <option value="mn">Монгол</option>
              <option value="en">English</option>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Notify customer</ControlLabel>
            <div>
              <Toggle
                className="wide"
                checked={this.props.notifyCustomer}
                onChange={e =>
                  this.onChangeFunction('notifyCustomer', e.target.checked)
                }
                icons={{
                  checked: <span>Yes</span>,
                  unchecked: <span>No</span>
                }}
              />
            </div>
          </FormGroup>
        </LeftItem>
      </FlexItem>
    );
  }
}

export default Options;
