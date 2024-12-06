/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import {LinkOrButton} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	/**
	 * Flag to indicate if `active` class should be applied.
	 */
	active?: boolean;

	/**
	 * Flag to indicate if `collapsed` class should be applied.
	 */
	collapsed?: boolean;

	/**
	 * Flag to indicate if `disabled` class should be applied.
	 */
	disabled?: boolean;

	/**
	 * Flag to indicate if icon should be shown.
	 */
	showIcon?: boolean;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;
}

export const Link = React.forwardRef<
	HTMLButtonElement | HTMLAnchorElement | HTMLDivElement,
	IProps
>(
	(
		{
			active,
			children,
			className,
			collapsed,
			disabled,
			showIcon,
			spritemap,
			...otherProps
		},
		ref
	) => {
		if (showIcon) {
			return (
				<div
					{...(otherProps as Omit<
						IProps,
						keyof React.AnchorHTMLAttributes<HTMLAnchorElement>
					> &
						React.HTMLAttributes<HTMLDivElement>)}
					className={classNames('nav-link', className, {
						active,
						['collapse-icon']: showIcon,
						collapsed,
						disabled,
					})}
					ref={ref as React.Ref<HTMLDivElement>}
				>
					{children}
					<span className="collapse-icon-closed">
						<Icon
							focusable="false"
							role="presentation"
							spritemap={spritemap}
							symbol="angle-right-small"
						/>
					</span>

					<span className="collapse-icon-open">
						<Icon
							focusable="false"
							role="presentation"
							spritemap={spritemap}
							symbol="angle-down-small"
						/>
					</span>
				</div>
			);
		}

		return (
			<LinkOrButton
				{...otherProps}
				buttonDisplayType="unstyled"
				buttonType="button"
				className={classNames('nav-link', className, {
					active,
					['collapse-icon']: showIcon,
					collapsed,
					disabled,
				})}
				ref={ref}
			>
				{children}
			</LinkOrButton>
		);
	}
);

Link.displayName = 'NavLink';
