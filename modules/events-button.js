
import mix        from './mix.js';
import EventsNode from './events-node.js';

const assign   = Object.assign;
const defaults = {
    pointerdown: { 1: "start", 2: 60, 3: 0.5 },
    pointerup:   { 1: "stop", 2: 60 }
};

/* Button */

export default function Button(id, data = assign({}, defaults)) {
    const inputs  = { size: 0 };
    const outputs = { size: 1 };

    // extends EventsNode
    EventsNode.call(this, id, inputs, outputs);

    this.data = data;
}

mix(Button.prototype, EventsNode.prototype);
