import undefined_generator from '../accumulators/undefined';
import max_accumulator from '../accumulators/max';
import bin_engine from './bin_engine';

/**
 * bin_max() leaves the maximum number of each bin in the bin
 *
 * @param {Array} data Data set
 * @param {number} lower_bound Lowest coordinate value to retain
 * @param {number} upper_bound Highest coordinate value to retain
 * @param {number} bin_size
 * @param {Function} [binning_projector] image of the projector function determines the values used for binning
 * @param {Function} [data_projector] image of projector function over the codomain of the bin is placed into bin
 * @param {Function} [bin_processing_function] function which does post processing on bins
 * @returns {Array} Bins of arrays of data!
 */
function bin_max (data, lower_bound, upper_bound, bin_size, binning_projector, data_projector, bin_processing_function) {
  return bin_engine(data, lower_bound, upper_bound, bin_size, undefined_generator, max_accumulator, binning_projector, data_projector, bin_processing_function);
}

export default bin_max;