export const getParentPlatforms = (data) => {
	return data.parent_platforms.map((el) => el.platform).map((el) => el);
};
