/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 @license
 Copyright (c) 2015 Simon Friis Vindum.
 This code may only be used under the MIT License found at
 https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 Code distributed by Snabbdom as part of the Snabbdom project at
 https://github.com/snabbdom/snabbdom/
 */

import { VM } from './vm';

export type Key = string | number;

export type VNodes = Array<VNode | null>;

export interface VNode {
    sel: string | undefined;
    data: VNodeData;
    children: VNodes | undefined;
    elm: Node | undefined;
    text: string | undefined;
    key: Key | undefined;
    hook: Hooks<any>;
    owner: VM;
}

export interface VElement extends VNode {
    sel: string;
    data: VElementData;
    children: VNodes;
    elm: Element | undefined;
    text: undefined;
    key: Key;
}

export interface VCustomElement extends VElement {
    mode: 'closed' | 'open';
    ctor: any;
    // copy of the last allocated children.
    aChildren?: VNodes;
}

export interface VText extends VNode {
    sel: undefined;
    children: undefined;
    elm: Node | undefined;
    text: string;
    key: undefined;
}

export interface VComment extends VNode {
    sel: undefined;
    children: undefined;
    text: string;
    key: undefined;
}

export interface VNodeData {
    props?: Record<string, any>;
    attrs?: Record<string, string | number | boolean>;
    className?: string;
    style?: string;
    classMap?: Record<string, boolean>;
    styleDecls?: Array<[string, string, boolean]>;
    context?: Record<string, Record<string, any>>;
    on?: Record<string, (event: Event) => any>;
    svg?: boolean;
}

export interface VElementData extends VNodeData {
    key: Key;
}

export interface Hooks<N extends VNode> {
    create: (vNode: N) => void;
    insert: (vNode: N, parentNode: Node, referenceNode: Node | null) => void;
    move: (vNode: N, parentNode: Node, referenceNode: Node | null) => void;
    update: (oldVNode: N, vNode: N) => void;
    remove: (vNode: N, parentNode: Node) => void;
    hydrate: (vNode: N, node: Node) => void;
}
