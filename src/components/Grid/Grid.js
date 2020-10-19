import React, { Component } from "react";

/** @jsx jsx */
import { jsx } from '@emotion/core';

import Checkbox from "../Checkbox";

import UniqueId from 'react-html-id';
import { FaDownload } from 'react-icons/fa';
import styles from './styles'


class Grid extends Component {
  constructor(props) {
    super(props);
    UniqueId.enableUniqueIds(this);
    this.state = {
      isChecked: props.checked,
      countSelected: 0,
      list: [
        {
          name: "smss.exe",
          device: "Stark",
          path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
          status: "scheduled"
        },
        {
          name: "netsh.exe",
          device: "Targaryen",
          path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
          status: "available"
        },
        {
          name: "uxtheme.dll",
          device: "Lanniester",
          path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
          status: "available"
        },
        {
          name: "cryptbase.dll",
          device: "Martell",
          path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
          status: "scheduled"
        },
        {
          name: "7za.exe",
          device: "Baratheon",
          path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
          status: "scheduled"
        }
      ]
    };
  }

  handleCheckbox = (event) => {
    const { name: itemName, checked } = event.target

    const chkAll = document.querySelector("#checkAll")

    this.setState((prevState) => {
      let { list, allChecked, allUnchecked, countSelected } = prevState

      if (itemName === "checkAll") {
        allChecked = checked;

        list = list.map((item) => ({
          ...item,
          isChecked: checked,
          rowSelected: allChecked
        }));

        countSelected = allChecked ? Object.keys(list).length : 0
      } else {
          if(checked) {
            chkAll.indeterminate = true
            countSelected += 1
          }
          else {
            chkAll.indeterminate = false
            countSelected -= 1
          }

        list = list.map((item) =>
          item.name === itemName ? { ...item, isChecked: checked, rowSelected: checked } : item
        );

        allChecked = list.every((item) => item.isChecked)
        allUnchecked = list.every((item) => !item.isChecked)

        chkAll.indeterminate = allChecked ? false : true

        if(allUnchecked){
          chkAll.indeterminate = false
          countSelected = 0
        }
      }
      return { list, allChecked,  countSelected}
    });
  };

  downloadSelected = () => {
    let message = {}
    let filter_result = this.state.list.filter(obj => {
      return obj.isChecked
    })

    filter_result.map((item, index) =>
      message[index] = {device: item.device, path: item.path}
    );

    alert(Object.keys(message).length ? JSON.stringify(message) : 'No items selected')
  }

  render() {
    return (
      <div css={styles.default}>
        <h1>Display grid here</h1>
        <div css={styles.grid_actions}>
          <div>
            <Checkbox
              id="checkAll"
              name="checkAll"
              checked={this.state.allChecked}
              onChange={this.handleCheckbox}
            />
          </div>
          <div style={{minWidth: '100px'}}>
            Selected {this.state.countSelected ? this.state.countSelected : 'None Selected'}
          </div>
          <div style={{marginLeft: '20px'}}>
            <button onClick={this.downloadSelected}>
              <FaDownload />
              Download Selected
            </button>
          </div>
        </div>
        <table css={styles.grid}>
          <thead>
            <tr>
              <th role="columnheader"></th>
              <th role="columnheader">Name</th>
              <th role="columnheader">Device</th>
              <th role="columnheader">Path</th>
              <th role="columnheader">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((item, index) => {
              return (
                <tr key={index} data-row-selected={item.rowSelected}>
                  <td role="gridcell">
                    <Checkbox
                      id={this.nextUniqueId()}
                      name={item.name}
                      checked={item.isChecked}
                      onChange={this.handleCheckbox}
                    />
                  </td>
                  <td role="gridcell">{item.name}</td>
                  <td role="gridcell">{item.device}</td>
                  <td role="gridcell">{item.path}</td>
                  <td role="gridcell" css={styles.status}>
                    {item.status.toLowerCase() === 'available' && <span css={styles.available}></span>}
                    {item.status}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid
