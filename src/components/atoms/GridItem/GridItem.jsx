import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

const paramDefaultValues = {
  get container() {
    return false;
  },
  get spacing() {
    return 0;
  },
  get columnSpacing() {
    return 0;
  },
  get rowSpacing() {
    return 0;
  },
  get justifyContent() {
    return null;
  },
  get xs() {
    return 12;
  },
};

/**
 * Serves as a grid item.
 *
 * @param {object} obj
 * @param {boolean} obj.container - Sets if the grid item is also a container.
 * @param {number} obj.spacing - Sets both the row and column of the grid item's children.
 * @param {number} obj.columnSpacing - Sets the column spacing of the grid item's children.
 * @param {number} obj.rowSpacing - Sets the row spacing of the grid item's children.
 * @param {string} obj.justifyContent - Sets the alignments of the grid item's children relative to the main axis (horintal by default).
 * @param {(number|boolean|string)} obj.xs - Spacing to be occupied on >=`xs` breakpoint. ({@link https://mui.com/material-ui/api/grid/#props For complete description})
 * @param {(number|boolean|string)} obj.sm - Spacing to be occupied on >=`sm` breakpoint. ({@link https://mui.com/material-ui/api/grid/#props For complete description})
 * @param {(number|boolean|string)} obj.md - Spacing to be occupied on >=`md` breakpoint. ({@link https://mui.com/material-ui/api/grid/#props For complete description})
 * @param {(number|boolean|string)} obj.lg - Spacing to be occupied on >=`lg` breakpoint. ({@link https://mui.com/material-ui/api/grid/#props For complete description})
 * @param {(number|boolean|string)} obj.xl - Spacing to be occupied on >=`xl` breakpoint. ({@link https://mui.com/material-ui/api/grid/#props For complete description})
 * @param {object} obj.sx - Custom styling. ({@link https://mui.com/system/the-sx-prop/ For more info.})
 *
 * @component
 * @category Components
 * @subcategory Atoms
 * @example
 *
 * <GridItem>
 *  // your codes
 * </GridItem>
 */
const GridItem = ({
  container = paramDefaultValues.container,
  spacing = paramDefaultValues.spacing,
  columnSpacing = paramDefaultValues.columnSpacing,
  rowSpacing = paramDefaultValues.rowSpacing,
  justifyContent = paramDefaultValues.justifyContent,
  children,
  xs = paramDefaultValues.xs,
  sm,
  md,
  lg,
  xl,
  sx,
}) => {
  return (
    <Grid
      container={container}
      spacing={container ? spacing : undefined}
      columnSpacing={container ? columnSpacing : undefined}
      rowSpacing={container ? rowSpacing : undefined}
      justifyContent={justifyContent}
      item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      sx={sx}
    >
      {children}
    </Grid>
  );
};

GridItem.propTypes = {
  container: PropTypes.bool,
  spacing: PropTypes.number,
  columnSpacing: PropTypes.number,
  rowSpacing: PropTypes.number,
  justifyContent: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  sx: PropTypes.object,
};

GridItem.defaultProps = {
  container: paramDefaultValues.container,
  spacing: paramDefaultValues.spacing,
  columnSpacing: paramDefaultValues.columnSpacing,
  rowSpacing: paramDefaultValues.rowSpacing,
  justifyContent: paramDefaultValues.justifyContent,
  xs: paramDefaultValues.xs,
};

export default GridItem;
