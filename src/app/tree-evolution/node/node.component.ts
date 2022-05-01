import { Component, Input, OnInit } from '@angular/core';
import { Node } from '../../models/node.interface';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent implements OnInit {
  @Input()
  node: Node;

  constructor() {}

  ngOnInit() {}
}
