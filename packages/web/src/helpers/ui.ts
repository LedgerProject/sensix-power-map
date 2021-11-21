import React from 'react';

export function getElementBounds<T extends HTMLElement>(ref: React.RefObject<T>) {
	//@ts-ignore
	let bounds: ClientRect = { bottom: 0, left: 0, right: 0, top: 0, height: 0, width: 0 };
	if (ref.current) bounds = ref.current.getBoundingClientRect();
	return bounds;
}

export function isElement(node: React.ReactNode, name: string) {
	if (!node) return false;
	if (!React.isValidElement(node)) return false;
	if (typeof node.type === 'string') return false;

	return node.type.name === name;
}

export function truncateText(text: string, limit: number) {
	return text.length > limit ? `${text.substr(0, limit - 3)}...` : text;
}
