import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Node } from '../models/node.interface';

@Component({
  selector: 'app-tree-evolution',
  templateUrl: './tree-evolution.component.html',
  styleUrls: ['./tree-evolution.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TreeEvolutionComponent implements OnInit {
  node: Node = {
    label: 'root',
    nodes: [
      {
        label: '1',
        nodes: [
          { label: '1.1', nodes: [{ label: '1.1.1' }] },
          { label: '1.2', nodes: [{ label: '1.2.1' }] },
          { label: '1.3', nodes: [{ label: '1.3.1' }] },
        ],
      },
      {
        label: '2',
      },
      {
        label: '3',
        nodes: [
          { label: '3.1' },
          { label: '3.2' },
          {
            label: '3.3',
            nodes: [
              { label: '3.3.1' },
              {
                label: '3.3.2',
                nodes: [{ label: '3.3.2.1' }, { label: '3.3.2.1' }],
              },
              { label: '3.3.3' },
            ],
          },
          { label: '3.4' },
        ],
      },
      {
        label: '4',
      },
      {
        label: '5',
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
