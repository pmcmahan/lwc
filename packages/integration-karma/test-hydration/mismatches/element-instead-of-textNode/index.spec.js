export default {
    props: {
        showAsText: false,
    },
    clientProps: {
        showAsText: true,
    },
    snapshot(target) {
        return {
            text: target.shadowRoot.firstChild.textContent,
        };
    },
    test(target, snapshots, consoleCalls) {
        const hydratedSnapshot = this.snapshot(target);

        expect(hydratedSnapshot.text).toBe(snapshots.text);

        const text = target.shadowRoot.firstChild;

        expect(text.nodeType).toBe(Node.TEXT_NODE);

        expect(consoleCalls.error).toHaveSize(2);
        expect(consoleCalls.error[0][0].message).toContain(
            '[LWC error]: Hydration mismatch: expecting element with tag "undefined" but found "span"'
        );
        expect(consoleCalls.error[1][0]).toContain('Recovering from error while hydrating');
    },
};
